import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import * as jwt from 'jsonwebtoken';
// added tues 13th
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../models/user";


@Injectable()
export class AuthLoginService {
  public token: string;
  private LoggedIn = new BehaviorSubject<boolean>(false);
  currentLoggedIn = this.LoggedIn.asObservable();
  private emptyUser = new User;

  private currentUser = new BehaviorSubject<User>(this.emptyUser);
  currentUserObserver = this.currentUser.asObservable();


  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + '/api/signin', { email: email, password: password })
      .map(user => {
        console.log('login has fired');

        console.log(user);
        const parted = user.token.split(' ');
        const currentUserReturned = jwt.decode(parted[1],appConfig.secret);
        // let token = user.json() &&  user.json().token;
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(currentUserReturned));
          localStorage.setItem('token', JSON.stringify(user));
          this.changeLoginStatus(true);
          this.changeCurrentUserStatus(currentUserReturned);
        }
        console.log('usertoken is');
        console.log(user.token);
        console.log ('user is');
        console.log(user.email);

        return user;
      });
  }




  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.changeLoginStatus(false);
    this.changeCurrentUserStatus(this.emptyUser);
  }


  //  function for observables
  changeLoginStatus(nextLoginStatus: boolean){
    this.LoggedIn.next(nextLoginStatus);
    console.log('Current Project Type' + nextLoginStatus);
  }

  changeCurrentUserStatus(nextCurrentUser:User) {
    this.currentUser.next(nextCurrentUser);
  }

}
