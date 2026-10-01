import { Component, inject } from '@angular/core';
import { MenuService } from '../menu';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  menuService = inject(MenuService);
}