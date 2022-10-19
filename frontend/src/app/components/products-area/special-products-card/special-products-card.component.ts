import { increment } from './../../../../state/total-price/total-price-actions';
import { addCartItems } from './../../../../state/cart/cart-actions';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart.service';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { SpecialProductsModel } from 'src/app/models/special-products-model';

@Component({
  selector: 'app-special-products-card',
  templateUrl: './special-products-card.component.html',
  styleUrls: ['./special-products-card.component.scss']
})
export class SpecialProductsCardComponent implements OnInit {

  @Input()
  specialProduct: SpecialProductsModel;
  imgSrc: string;
  quantity: number = 1;
  popUp: boolean = false;
  dimmed: string = '';
  totalPrice: number;


  constructor(
    private cartService: CartService,
    private store: Store<"cartItems">
  ) { }

  ngOnInit(): void {
    this.imgSrc = environment.imagesUrl + this.specialProduct.product.imageName;
    this.totalPrice = this.specialProduct.product.price * this.quantity;
  }

  async addToCart() {
    const product = await this.cartService.addToCart(this.specialProduct.product, this.quantity);
    product.product = this.specialProduct.product;
    this.store.dispatch(addCartItems({ payload: product }));
    this.store.dispatch(increment({ payload: this.totalPrice }));
    this.dimmed = "";
    this.popUp = false;
    this.quantity = 1;
    this.totalPrice = this.specialProduct.product.price * this.quantity;
    alert(`added to cart`);
  }

  quantityPlus() {
    if (this.quantity >= 1 && this.quantity < 20) {
      this.quantity++;
      this.totalPrice = this.specialProduct.product.price * this.quantity;
    }
    else {
      alert(`quantity must be between 1 and 20`);
    }
  }

  quantityMinus() {
    if (this.quantity > 1 && this.quantity <= 20) {
      this.quantity--;
      this.totalPrice = this.specialProduct.product.price * this.quantity;
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
    this.dimmed = "";
    this.popUp = false;
    this.quantity = 1;
    this.totalPrice = this.specialProduct.product.price * this.quantity;
  }

}
