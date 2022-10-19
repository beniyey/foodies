import { Store } from '@ngrx/store';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import CartItemModel from '../models/cart-item-model';
import ProductsModel from '../models/products-model';
import OrderModel from '../models/order-model';
import { CartModel } from '../models/cart-model';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private store: Store) { }

  async getCart(token: string): Promise<CartModel> {
    const cart: CartModel = await firstValueFrom(this.http.post<CartModel>(environment.cartUrl, null));
    return cart;
  }

  async getCartItems(): Promise<CartItemModel[]> {
    const cartId = JSON.parse(localStorage.getItem('cart'))._id;
    const cartItems = await firstValueFrom(this.http.get<CartItemModel[]>(environment.cartItemsUrl + cartId));
    return cartItems;
  }


  async addToCart(product: ProductsModel, quantity: number): Promise<CartItemModel> {
    const cartItem = new CartItemModel();
    cartItem.productId = product._id;
    cartItem.quantity = quantity;
    cartItem.totalPrice = product.price;
    cartItem.cartId = JSON.parse(localStorage.getItem('cart'))._id;

    const addedItem = firstValueFrom(this.http.post<CartItemModel>(environment.cartItemsUrl, cartItem));
    return addedItem;
  }

  async removeFromCart(itemId: string): Promise<void> {
    await firstValueFrom(this.http.delete(environment.cartItemsUrl + itemId));
  }

  async sendOrder(order: OrderModel): Promise<OrderModel> {
    const addedOrder: any = await firstValueFrom(this.http.post(environment.ordersUrl, order))
    return addedOrder
  }

  async getUserOrders(): Promise<OrderModel[]> {
    const userId = (jwtDecode((this.store.source as any)._value.token) as any).user._id;
    const orders: OrderModel[] = await firstValueFrom(this.http.get<OrderModel[]>(environment.userOrdersUrl + userId));
    return orders;
  }

}
