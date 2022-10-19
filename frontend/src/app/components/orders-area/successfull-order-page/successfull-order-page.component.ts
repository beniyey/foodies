import { CartService } from './../../../services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import CartItemModel from 'src/app/models/cart-item-model';

@Component({
  selector: 'app-successfull-order-page',
  templateUrl: './successfull-order-page.component.html',
  styleUrls: ['./successfull-order-page.component.scss'],
})
export class SuccessfullOrderPageComponent implements OnInit {

  @ViewChild('invoice', { static: false }) private el: any;

  totalPrice: number = 0;
  cartItems: CartItemModel[] = [];

  constructor(
    private cartService: CartService
  ) {

  }

  async ngOnInit(): Promise<void> {

    this.totalPrice = +localStorage.getItem("totalPrice");
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));

    localStorage.removeItem("cart");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalPrice");
    const cart = await this.cartService.getCart(localStorage.getItem("token"));
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async createPDF(): Promise<void> {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("invoice.pdf");
      }
    });
  };

}
