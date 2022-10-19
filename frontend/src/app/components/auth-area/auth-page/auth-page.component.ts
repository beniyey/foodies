import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  public login: boolean = true;
  public paramsState: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    try {
      // check if user is logged in
      let token: string;
      this.store.subscribe((state: any) => token = state.token);
      if (token) {
        this.router.navigate(['/products']);
      }

      // check if user is logging in or registering
      this.paramsState = this.route.snapshot.paramMap.get('state')
      if (this.paramsState === 'register') {
        this.login = false;
      } else {
        this.login = true;
      }
    } catch (error) {
      alert("theres been an error try again or reload page");
    }
  }

  loginState(): void {
    try {
      this.login = true;
      this.router.navigate(['/auth-page/login']);
    } catch (error) {
      alert("theres been an error try again or reload page");
    }
  }

  registerState(): void {
    try {
      this.login = false;
      this.router.navigate(['/auth-page/register']);
    } catch {
      alert("theres been an error try again or reload page");
    }
  }

}
