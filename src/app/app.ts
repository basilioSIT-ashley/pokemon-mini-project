import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { CartComponent } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}