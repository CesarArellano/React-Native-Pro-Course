import {View, ScrollView, Image, FlatList, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigator/StackNavigator';
import {getPokemonById} from '../../../actions/pokemons';
import {useQuery} from '@tanstack/react-query';
import {FullScreenLoader} from '../../components/shared/FullScreenLoader';
import {FadeInImage} from '../../components/ui/FadeImage';
import {Chip, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Formatter} from '../../../config/helpers/formatter';
import {ThemeContext} from '../../context/ThemeContext';
import {SimpleDataHorizontalList} from '../../components/shared/SimpleDataHorizontalList';
import {ComplexDataHorizontalList} from '../../components/shared/ComplexDataHorizontalList';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({route}: Props) => {
  const {isDark} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const {pokemonId} = route.params;

  const pokeballImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

  const {data: pokemon} = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId),
    staleTime: 1000 * 60 * 60,
  });

  if (!pokemon) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView
      style={[styles.fullContainer, {backgroundColor: pokemon.color}]}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        {/* Pokemon Name */}
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 5,
          }}>
          {Formatter.capitalize(pokemon.name) + '\n'}#{pokemon.id}
        </Text>

        {/* Pokeball */}
        <Image source={pokeballImg} style={styles.pokeball} />

        <FadeInImage uri={pokemon.avatar} style={styles.pokemonImage} />
      </View>

      {/* Types */}
      <View style={styles.typeChipContainer}>
        {pokemon.types.map(type => (
          <Chip
            key={type}
            mode="outlined"
            selectedColor="white"
            style={styles.typeChip}>
            {type}
          </Chip>
        ))}
      </View>

      {/* Sprites */}
      <FlatList
        data={pokemon.sprites}
        horizontal
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        style={styles.spriteList}
        renderItem={({item}) => (
          <FadeInImage uri={item} style={styles.spriteImage} />
        )}
      />

      <View style={styles.containerList}>
        {/* Abilities */}
        <SimpleDataHorizontalList
          headerText="Abilities"
          data={pokemon.abilities}
        />
        {/* Stats */}
        <ComplexDataHorizontalList headerText="Stats" data={pokemon.stats} />
        {/* Moves */}
        <ComplexDataHorizontalList
          headerText="Moves"
          data={pokemon.moves.map(move => ({
            name: move.name,
            value: move.level,
          }))}
        />
        {/* Games */}
        <SimpleDataHorizontalList headerText="Games" data={pokemon.games} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  headerContainer: {
    height: 370,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 240,
    height: 240,
    position: 'absolute',
    bottom: -40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  typeChip: {
    marginLeft: 10,
  },
  typeChipContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  h100: {
    height: 100,
  },
  spriteList: {
    marginTop: 20,
    height: 100,
  },
  spriteImage: {width: 100, height: 100, marginHorizontal: 5},
  containerList: {
    paddingHorizontal: 15,
  },
});
