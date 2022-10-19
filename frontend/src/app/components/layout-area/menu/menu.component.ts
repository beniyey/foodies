import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import CartItemModel from 'src/app/models/cart-item-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: CartItemModel[] = [];

  constructor(private cartService: CartService, private productsService: ProductsService) { }

  async ngOnInit(): Promise<void> {
    const items = await this.cartService.getCartItems();
    this.items = items;
  }

  async remove(_id: string): Promise<void> {
    await this.cartService.removeFromCart(_id);
    this.items = await this.cartService.getCartItems();
  }

}
