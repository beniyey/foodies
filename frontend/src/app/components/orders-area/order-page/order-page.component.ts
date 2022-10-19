import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Store } from '@ngrx/store';
import CartItemModel from 'src/app/models/cart-item-model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import OrderModel from 'src/app/models/order-model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  cartItems: CartItemModel[];
  // references to used elements
  @ViewChild('pageSearch') pageSearchParameter: ElementRef;
  @ViewChild('delivery') dateOfDelivery: ElementRef;
  @ViewChild('searchItems') searchItems: ElementRef;

  // give current date string in format yyyy-mm-dd
  get currentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = (date.getDate() + 1) >= 10 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
    return `${year}-${month}-${day}`;
  }

  order = new OrderModel();
  orders: OrderModel[];
  totalPrice: number;
  totalProducts: number = 0;
  originalHTML: string;

  constructor(
    private store: Store,
    private cartService: CartService,
    private router: Router,
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.order.city = "";
      this.orders = await this.cartService.getUserOrders();
      this.cartItems = await this.cartService.getCartItems();

      // set variables using state
      this.store.subscribe(state => {
        this.cartItems = (state as any).cart;
        this.totalPrice = +(state as any).totalPrice;
      });

    } catch (error) {
      alert("there was an error please try again later or reload the page");
    }
  }

  async send(): Promise<void> {
    try {
      // validate that date is not in the past
      if (new Date(this.dateOfDelivery.nativeElement.value).getTime() < new Date().getTime()) {
        alert("delivery date must be in the future");
        return;
      };
      // validate that date is not taken
      if (this.validateDate()) {
        return;
      }

      // use stored and available data to create order
      this.order.cartId = JSON.parse(localStorage.getItem("cart"))._id;
      this.order.userId = JSON.parse(localStorage.getItem("cart")).userId;
      this.order.orderDate = new Date();
      this.order.totalPrice = this.totalPrice;
      await this.cartService.sendOrder(this.order);

      alert("order had been placed");
      this.router.navigate(["/order-success"]);

    } catch (error: any) {
      console.log(error);
    }
  }


  // validate the date is not taken by 3 or more orders
  validateDate(): any {
    try {
      const result = this.orders.filter(order =>
        new Date(order.deliveryDate).getTime() === new Date(this.dateOfDelivery.nativeElement.value).getTime()
      );

      if (result.length > 2) {
        alert("please Choose another date this date is already taken")
        this.dateOfDelivery.nativeElement.value = this.currentDate;
        return true
      };

      return false;

    } catch (error) {
      console.log(error);
    }
  };

  findElementToHighlight() {
    if (this.pageSearchParameter.nativeElement.value?.length > 0) {
      if (this.searchItems.nativeElement.innerHTML.includes("style='background-color:yellow;")) {
        this.searchItems.nativeElement.innerHTML = this.originalHTML;
      } else {
        this.originalHTML = this.searchItems.nativeElement.innerHTML;
      }
      this.searchItems.nativeElement.innerHTML = this.searchItems.nativeElement.innerHTML.replaceAll(this.pageSearchParameter.nativeElement.value, "<span style='background-color:yellow;'>" + this.pageSearchParameter.nativeElement.value + "</span>");
    }
  }
}
