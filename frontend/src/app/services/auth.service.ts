import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import CredentialsModel from '../models/credentials-model';
import UserModel from '../models/user-model';
import { login } from 'src/state/token/token-actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private store: Store
  ) { }

  async login(credentials: CredentialsModel): Promise<void> {
    const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credentials));
    localStorage.setItem('token', token);
    this.store.dispatch(login({ payload: token }));
    const cart = await this.cartService.getCart(token);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async register(user: UserModel): Promise<void> {
    const token = await firstValueFrom(this.http.post<string>(environment.registerUrl, user));
    localStorage.setItem('token', token);
    this.store.dispatch(login({ payload: token }))
    const cart = await firstValueFrom(this.http.post<string>(environment.cartUrl, { userId: user.id }));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async checkMail(userName: string): Promise<boolean> {
    return await firstValueFrom(this.http.get<boolean>(environment.checkMailUrl + userName));
  }

}
