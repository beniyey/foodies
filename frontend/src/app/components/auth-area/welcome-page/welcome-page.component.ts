import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  mainAnimation: string = 'main-animation';


  constructor(private router: Router, private store:Store) { }

  ngOnInit(): void {
    try {
          setTimeout(() => {
      this.mainAnimation = 'main-animation animate__animated animate__fadeOut';
      setTimeout(() => {
        this.mainAnimation = 'no-display';
      }, 1000)
    }, 2500)
      
      const token = (this.store.source as any)._value.token;
      if (token) {
        this.router.navigate(['/products']);
      }
    } catch (error) {
      alert("theres been an error try again or reload page");
    }
  }

  loginState(): void {
    try {
      this.router.navigate(['/auth-page/login']);
    } catch (error) {
      alert("theres been an error try again or reload page");
    }
  }

  registerState(): void {
    try {
      this.router.navigate(['/auth-page/register']);
    } catch (error) {
      alert("theres been an error try again or reload page");
    }
  }
}
