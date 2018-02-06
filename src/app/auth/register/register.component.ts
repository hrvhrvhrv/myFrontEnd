import { Component, OnInit } from '@angular/core';
import {AuthRegisterService, AlertService} from '../../services/auth-register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private  registerService: AuthRegisterService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }


  register() {
    this.loading = true;
    this.registerService.create(this.model)
      .subscribe(
        data => {  console.log(data);


                    this.alertService.success('Registration successful', true);
                     this.router.navigate(['/login']);



        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
