import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  ngOnInit() { }
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
<<<<<<< HEAD
      this.doLogin();//test
=======
      this.doLogin();
>>>>>>> c646b5cfbb76121c7f266777969fea029e6cdd31
    }
  }
  private doLogin(): void {
    this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl('list-trips')) //I changed this so that it goes to the trips page instead of the # page
      .catch((message) => this.formError = message);
  }
}
