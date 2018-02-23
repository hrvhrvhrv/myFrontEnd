import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthLoginService} from '../../services/auth-login.service';
import { AlertService} from '../../services/auth-register.service';
import {  validationMessage} from "../../models/validationMessage";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthLoginService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(


        data => {
          const returnedMessage = <validationMessage> data;
          if (returnedMessage.success) {
            this.alertService.success('Login successful', true);
            this.router.navigate([this.returnUrl]);
          } else {
            this.alertService.error(data[0], data[1]);
          }
        },


        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}






