import { Component, OnInit } from '@angular/core';
import {AuthLoginService} from "../services/auth-login.service";
import {AuthRegisterService} from "../services/auth-register.service";
import {User} from "../models/user";
import { ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  currentUser: User;

  constructor(private userService: AuthRegisterService, private authService: AuthLoginService, private router: Router,  private route: ActivatedRoute) {
}

  ngOnInit() {

    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }

}
