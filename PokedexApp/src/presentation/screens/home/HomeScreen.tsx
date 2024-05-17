import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FAB, Text, useTheme} from 'react-native-paper';
import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import {getPokemons} from '../../../actions/pokemons';
import {PokeballBg} from '../../components/ui/PokeballBg';
import {Pokemon} from '../../../domain/entities/pokemon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {FullScreenLoader} from '../../components/shared/FullScreenLoader';
import {globalTheme} from '../../../config/theme/global-theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigator/StackNavigator';

export const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const queryClient = useQueryClient();
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
    queryFn: async params => {
      const pokemons = await getPokemons(params.pageParam);
      pokemons.forEach(pokemon => {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon);
      });
      return pokemons;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View>
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
      <FAB
        label="Search"
        style={[globalTheme.fab, {backgroundColor: theme.colors.primary}]}
        color={theme.dark ? 'black' : 'white'}
        mode="elevated"
        onPress={() => navigation.navigate('SearchScreen')}
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
  headerText: {
    paddingBottom: 15,
  },
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
