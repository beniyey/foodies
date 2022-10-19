import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import CredentialsModel from 'src/app/models/credentials-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials = new CredentialsModel();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async send() {
    try {
      await this.authService.login(this.credentials);
      alert('Login successful');
      this.router.navigate(['/products']);
    } catch (error) {
      alert("userName or password is incorrect, please try again");
    }
  }

  // login a demo user for one time users
  async loginDemo() {
    try {
      this.credentials.userName = 'John';
      this.credentials.password = '123456789';
      await this.authService.login(this.credentials);
      alert('Login successful');
      this.router.navigate(['/products']);
    } catch (error) {
      alert("Login failed please try again");
    }
  }

}
