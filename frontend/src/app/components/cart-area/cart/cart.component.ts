import { set } from './../../../../state/total-price/total-price-actions';
import { addAllCartItems } from './../../../../state/cart/cart-actions';
import { Store, State } from '@ngrx/store';
import { CartService } from 'src/app/services/cart.service';
import { Component, Input, OnInit, Output, EventEmitter, LOCALE_ID } from '@angular/core';
import CartItemModel from 'src/app/models/cart-item-model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input()
  cartClass: string;

  // in case of close we emit an event to the parent component
  @Output()
  close = new EventEmitter<any>();

  cartItems: CartItemModel[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private store: Store,
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      // get cartItems from server  
      this.cartItems = await this.cartService.getCartItems()
      // calculate total price
      this.cartItems.forEach(item => {
        this.totalPrice += item.product.price * item.quantity;
      });
      // dispatch action to store and set totalPrice state
      // and save to local storage to initiate state on refresh
      this.store.dispatch(set({ payload: this.totalPrice }));
      // add all cartItems to store
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      this.store.dispatch(addAllCartItems({ payload: this.cartItems }));

      // subscribe to store to get the data to the cart component
      this.store.subscribe(state => {
        this.cartItems = (state as any)?.cart;
        this.totalPrice = (state as any)?.totalPrice;
      });
    } catch (error) {
    }
  }

  closeCart() {
    try {
      this.close.emit();
    } catch (error) {
      console.log(error)
    }
  }

}
