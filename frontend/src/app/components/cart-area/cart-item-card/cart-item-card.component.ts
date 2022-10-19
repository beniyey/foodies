import { removeCartItems } from './../../../../state/cart/cart-actions';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import CartItemModel from 'src/app/models/cart-item-model';
import { CartService } from 'src/app/services/cart.service';
import { Store } from '@ngrx/store';
import { decrement } from 'src/state/total-price/total-price-actions';


interface CartState {
  cartItems: CartItemModel[];
}

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss']
})
export class CartItemCardComponent implements OnInit {

  @Input()
  cartItem: CartItemModel;

  imageSrc: string;

  constructor(
    private cartService: CartService,
    private store: Store<CartState>
  ) {
  }


  ngOnInit(): void {
    // get image url
    try {
      this.imageSrc = environment.imagesUrl + this.cartItem.product.imageName;
    } catch (error) {
      console.log(error)
    }
  }


  async removeItem(): Promise<void> {
    try {
      this.store.dispatch(removeCartItems({ payload: this.cartItem }));
      this.store.dispatch(decrement({ payload: (this.cartItem.totalPrice * this.cartItem.quantity) }));
      await this.cartService.removeFromCart(this.cartItem._id);
    } catch (error) {
      console.log(error)
    }
  }

}
