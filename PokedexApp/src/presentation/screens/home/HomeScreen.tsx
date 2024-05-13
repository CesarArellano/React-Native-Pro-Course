import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getPokemons} from '../../../actions/pokemons';
import {PokeballBg} from '../../components/ui/PokeballBg';
import {Pokemon} from '../../../domain/entities/pokemon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  // Common Requests
  // const {isLoading, data: pokemons = []} = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60, // 60 minutes
  // });

  const {isLoading, data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    queryFn: params => getPokemons(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  return (
    <View style={{}}>
      <PokeballBg style={styles.imgPosition} />
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon: Pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={HeaderText}
        style={{paddingTop: top + 20}}
        onEndReached={() => fetchNextPage()}
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
    <Text style={styles.headerText} variant="displayMedium">
      Pokédex
    </Text>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    top: 10,
  },
  headerText: {
    paddingBottom: 15,
  },
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
