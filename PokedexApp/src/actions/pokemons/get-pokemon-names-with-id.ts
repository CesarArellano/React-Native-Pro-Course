import {pokeApi} from '../../config/api/pokeApi';
import {PokeApiPaginatedReponse} from '../../infrastructure/interfaces/poke-api.interfaces';

export const getPokemonNamesWithId = async () => {
  const url = 'pokemon?limit=1000';

  const {data} = await pokeApi.get<PokeApiPaginatedReponse>(url);

  return data.results.map(info => {
    const splitUrl = info.url.split('/');
    const pokemonId = Number(splitUrl[splitUrl.length - 2]);
    return {
      id: pokemonId,
      name: info.name,
    };
  });
};
