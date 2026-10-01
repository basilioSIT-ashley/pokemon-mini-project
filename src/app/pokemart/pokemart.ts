import { Component, inject } from '@angular/core';
import { Pokemart } from '../pokemart';

@Component({
  selector: 'app-pokemart',
  imports: [],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class PokemartComponent {

  private pokemartService = inject(Pokemart);

  items = this.pokemartService.getItems();

}