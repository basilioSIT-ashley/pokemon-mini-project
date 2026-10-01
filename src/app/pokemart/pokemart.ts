import { Component, computed, inject, signal } from '@angular/core';
import { Pokemart, ShopItem } from '../pokemart';

@Component({
  selector: 'app-pokemart',
  imports: [],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class PokemartComponent {

  private pokemartService = inject(Pokemart);

  items = this.pokemartService.getItems();

  cart = signal<ShopItem[]>([]);

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(item: ShopItem): void {
    this.cart.update(cart => [...cart, item]);
  }
}