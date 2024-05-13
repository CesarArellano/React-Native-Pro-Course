import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import {getPokemons} from '../../../actions/pokemons';

export const HomeScreen = () => {
  const {} = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  return (
    <View>
      <Text variant="headlineLarge">HomeScreen</Text>
    </View>
  );
};
