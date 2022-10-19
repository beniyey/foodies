import { environment } from './../../../../environments/environment';
import CartItemModel from 'src/app/models/cart-item-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item-card',
  templateUrl: './order-item-card.component.html',
  styleUrls: ['./order-item-card.component.scss']
})
export class OrderItemCardComponent implements OnInit {

  @Input()
  cartItems: CartItemModel[];

  imgSrc: string;

  constructor() { }

  ngOnInit(): void {
    try {
      this.imgSrc = environment.imagesUrl;
    } catch (error) {
      console.log(error)
    }
  }

}
