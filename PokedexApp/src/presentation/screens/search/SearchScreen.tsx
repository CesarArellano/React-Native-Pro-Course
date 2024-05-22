import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import {getPokemonNamesWithId} from '../../../actions/pokemons/';
import {FullScreenLoader} from '../../components/shared/FullScreenLoader';
import {getPokemonsByIds} from '../../../actions/pokemons/get-pokemons-by-ids';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState<string>('');

  const debouncedValue = useDebouncedValue(term);
  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNameList.find(
        item => item.id === Number(debouncedValue),
      );

      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) {
      return [];
    }

    if (debouncedValue.length < 3) {
      return [];
    }

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(debouncedValue.toLocaleLowerCase()),
    );
  }, [debouncedValue, pokemonNameList]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemon', 'by', pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

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
      {isLoadingPokemons && (
        <ActivityIndicator style={styles.activityIndicator} />
      )}
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={HeaderText}
        ListFooterComponent={<View style={styles.footerContainer} />}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
        showsVerticalScrollIndicator={false}
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
  footerContainer: {
    height: 75,
  },
});
