import { increment } from './../../../../state/total-price/total-price-actions';
import { addCartItems } from 'src/state/cart/cart-actions';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import ProductsModel from 'src/app/models/products-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  @Input()
  product: ProductsModel;

  imageSrc: string;
  quantity: number = 1;
  totalPrice: number;
  popUp: boolean = false;
  dimmed: string = "bright";


  constructor(
    private cartService: CartService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.imageSrc = environment.imagesUrl + this.product.imageName;
    this.totalPrice = this.product.price * this.quantity;
  }

  async addToCart() {
    const cartItem = await this.cartService.addToCart(this.product, this.quantity);
    cartItem.product = this.product;
    this.store.dispatch(addCartItems({ payload: cartItem }));
    this.store.dispatch(increment({ payload: this.totalPrice }));
    this.dimmed = "bright";
    this.popUp = false;
    this.quantity = 1;
    this.totalPrice = this.product.price * this.quantity;
    alert(`added to cart`);
  }

  quantityPlus() {
    if (this.quantity >= 1 && this.quantity < 20) {
      this.quantity++;
      this.totalPrice = this.product.price * this.quantity;
    }
    else {
      alert(`quantity must be between 1 and 20`);
    }
  }

  quantityMinus() {
    if (this.quantity > 1 && this.quantity <= 20) {
      this.quantity--;
      this.totalPrice = this.product.price * this.quantity;
    }
    else {
      alert(`quantity must be between 1 and 20`);
    }
  }

  openPopup() {
    this.dimmed = "dimmed";
    this.popUp = true;
  }

  closePopup() {
    this.dimmed = "bright";
    this.popUp = false;
    this.quantity = 1;
    this.totalPrice = this.product.price * this.quantity;
  }
}
