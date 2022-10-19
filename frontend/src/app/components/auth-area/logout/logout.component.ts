import { resetTotal } from 'src/state/total-price/total-price-actions';
import { resetCartItems } from 'src/state/cart/cart-actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import UserModel from 'src/app/models/user-model';
import { Component, OnInit } from '@angular/core';
import { logout } from 'src/state/token/token-actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  token: string;
  user: UserModel;

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    try {
      this.store.subscribe(state => this.token = (state as any).token);
      this.user = (jwt_decode(this.token) as any).user;
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    localStorage.clear()
    this.store.dispatch(logout());
    this.store.dispatch(resetCartItems());
    this.store.dispatch(resetTotal());
    this.router.navigate(['/welcome-page']);
  }

}
