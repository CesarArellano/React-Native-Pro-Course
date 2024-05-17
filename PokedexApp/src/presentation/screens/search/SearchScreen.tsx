import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {Pokemon} from '../../../domain/entities/pokemon';
import {PokemonCard} from '../../components/pokemons/PokemonCard';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Search Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={value => console.log(value)}
        value={''}
      />
      <ActivityIndicator style={styles.activityIndicator} />
      <FlatList
        data={[] as Pokemon[]}
        keyExtractor={(pokemon: Pokemon, index) => `${pokemon.id}-${index}`}
        ListHeaderComponent={HeaderText}
        style={{paddingTop: top + 20}}
        // onEndReached={() => fetchNextPage()}
        renderItem={pokemon => (
          <PokemonCard key={pokemon.index} pokemon={pokemon.item} />
        )}
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
