import { Component, OnInit } from '@angular/core';
import {AuthLoginService} from "../services/auth-login.service";
import {AuthRegisterService} from "../services/auth-register.service";
import {User} from "../models/user";



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  currentUser: User;
  LoggedIn : boolean;

  constructor(private userService: AuthRegisterService, private authService: AuthLoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.authService.currentLoggedIn.subscribe(LoggedIn =>this.LoggedIn = LoggedIn);
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);}

  ngOnInit() {
  }

}
