import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  region: string;
  type: string;
  heldItem: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemon: Pokemon[] = [
    {
      name: 'Pikachu',
      region: 'Kanto',
      type: 'Electric',
      heldItem: 'Light Ball',
      description: 'Pikachu stores electricity in its cheeks and can release powerful electric attacks.'
    },
    {
      name: 'Charizard',
      region: 'Kanto',
      type: 'Fire/Flying',
      heldItem: 'Charcoal',
      description: 'Charizard is a powerful Fire-type Pokémon that can fly and breathe intense flames.'
    },
    {
      name: 'Cyndaquil',
      region: 'Johto',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Cyndaquil is a small Fire-type Pokémon that can produce flames from its back.'
    },
    {
      name: 'Ampharos',
      region: 'Johto',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'Ampharos produces a strong light from the orb on its tail.'
    },
    {
      name: 'Mudkip',
      region: 'Hoenn',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'Mudkip has a fin that acts as a highly sensitive radar for detecting movement in water.'
    },
    {
      name: 'Gardevoir',
      region: 'Hoenn',
      type: 'Psychic/Fairy',
      heldItem: 'Twisted Spoon',
      description: 'Gardevoir can use powerful psychic abilities and create protective fields around itself.'
    }
  ];

  getPokemon(): Pokemon[] {
    return this.pokemon;
  }
}