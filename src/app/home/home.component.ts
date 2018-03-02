import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {AuthRegisterService} from '../services/auth-register.service';
import {AuthLoginService} from "../services/auth-login.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  currentUser: User;

  LoggedIn : boolean;

  constructor(private userService: AuthRegisterService, private authService: AuthLoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.authService.currentLoggedIn.subscribe(LoggedIn =>this.LoggedIn = LoggedIn);
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
  }

  ngOnInit() {

  }


}
