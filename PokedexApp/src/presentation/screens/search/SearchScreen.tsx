import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import {getPokemonNamesWithId} from '../../../actions/pokemons/';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState<string>('');
  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find(item => item.id === Number(term));

      return pokemon ? [pokemon] : [];
    }

    if (term.length === 0) {
      return [];
    }

    if (term.length < 3) {
      return [];
    }

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(term.toLocaleLowerCase()),
    );
  }, [term, pokemonNameList]);

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Search Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={value => setTerm(value)}
        value={term}
      />
      {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
      <Text>{JSON.stringify(pokemonNameIdList, null, 2)}</Text>
      <FlatList
        data={pokemonNameList}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        ListHeaderComponent={HeaderText}
        style={{paddingTop: top + 20}}
        // onEndReached={() => fetchNextPage()}
        renderItem={pokemon => <Text>{pokemon.item.id}</Text>}
        showsVerticalScrollIndicator
      />
    </View>
  );
};

const HeaderText = () => {
  return (
    <Text style={styles.headerText} variant="titleLarge">
      Pokédex
    </Text>
  );
};

const styles = StyleSheet.create({
  headerText: {
    paddingBottom: 15,
  },
  activityIndicator: {
    top: 15,
  },
});
