import { Injectable } from '@angular/core';

export interface ShopItem {
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Pokemart {

  private items: ShopItem[] = [
    {
      name: 'Poké Ball',
      price: 200,
      description: 'A device for catching wild Pokémon.'
    },
    {
      name: 'Great Ball',
      price: 600,
      description: 'A better Poké Ball with a higher catch rate.'
    },
    {
      name: 'Ultra Ball',
      price: 1200,
      description: 'A high-performance Poké Ball with an even higher catch rate.'
    },
    {
      name: 'Potion',
      price: 300,
      description: 'Restores 20 HP to a Pokémon.'
    },
    {
      name: 'Super Potion',
      price: 700,
      description: 'Restores 50 HP to a Pokémon.'
    },
    {
      name: 'Hyper Potion',
      price: 1200,
      description: 'Restores 120 HP to a Pokémon.'
    },
    {
      name: 'Revive',
      price: 1500,
      description: 'Revives a fainted Pokémon and restores half of its HP.'
    },
    {
      name: 'Antidote',
      price: 100,
      description: 'Cures a Pokémon of poison.'
    },
    {
      name: 'Paralyze Heal',
      price: 200,
      description: 'Cures a Pokémon of paralysis.'
    },
    {
      name: 'Burn Heal',
      price: 250,
      description: 'Cures a Pokémon of a burn.'
    }
  ];

  getItems(): ShopItem[] {
    return this.items;
  }
}