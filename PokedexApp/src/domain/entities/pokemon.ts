export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];
  color: string;
  games: string[];
  stats: PokemonStat[];
  abilities: string[];
  moves: PokemonMove[];
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonMove {
  name: string;
  level: number;
}
