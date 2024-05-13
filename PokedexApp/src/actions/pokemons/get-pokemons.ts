import {pokeApi} from '../../config/api/pokeApi';
import type {Pokemon} from '../../domain/entities/pokemon';
import type {
  PokeApiPaginatedReponse,
  PokeApiPokemon,
} from '../../infrastructure/interfaces/poke-api.interfaces';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

export const sleep = async () => {
  return new Promise(resolve => setTimeout(resolve, 2000));
};

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = '/pokemon';
    const {data} = await pokeApi.get<PokeApiPaginatedReponse>(url, {
      params: {
        offset: page,
        limit,
      },
    });

    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeApiPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    const pokemonsPromises = pokeApiPokemons.map(item =>
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    const pokemons = await Promise.all(pokemonsPromises);

    return pokemons;
  } catch (error) {
    throw new Error('Error getting pokemons');
  }
};
