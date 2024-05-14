// import {Move, Stat} from '../../infrastructure/interfaces/poke-api.interfaces';

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];
  color: string;
  // games: string[];
  // stats: Stat[];
  // abilities: string[];
  // moves: Move[];
}
