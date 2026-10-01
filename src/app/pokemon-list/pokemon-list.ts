import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {

  private pokemonService = inject(PokemonService);

  pokemon = this.pokemonService.getPokemon();

}