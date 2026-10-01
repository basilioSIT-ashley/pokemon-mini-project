import { Component, inject } from '@angular/core';
import { MenuService } from '../menu';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  menuService = inject(MenuService);
}