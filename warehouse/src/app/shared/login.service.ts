import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: {
    userid: number,
    isLoggedIn: boolean,
    username: string,
    password: string,
    givenName: string,
    familyName: string
  } = {
    userid: 1234,
    isLoggedIn: false,
    username: "",
    password: "",
    givenName: "",
    familyName: ""
  };

  get user(): any {
    return this._user;
  }

  constructor() { }

  authenticate() {
    this._user.isLoggedIn = true;
    this._user.givenName = "Jane";
    this._user.familyName = "Doe";
    return this._user.isLoggedIn;
  }
}
