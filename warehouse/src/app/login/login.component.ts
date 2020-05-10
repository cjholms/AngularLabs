import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'nw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public isLoggedIn: boolean = false;

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoggedIn = this._loginService.authenticate();
  }

}
