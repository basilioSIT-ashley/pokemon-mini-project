import { Component } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemartComponent } from './pokemart/pokemart';

@Component({
  selector: 'app-root',
  imports: [PokemonList, PokemartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}