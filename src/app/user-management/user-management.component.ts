import { Component, OnInit } from '@angular/core';
import { UserService} from "../services/user.service";
import { User} from "../models/user";
import { Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import { AuthLoginService} from "../services/auth-login.service";



@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  allUsers: Array<User>;
  currentUser: User;

  disabled: boolean;

  constructor(private userService: UserService, private authService: AuthLoginService, private router: Router ) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(data =>{this.allUsers = data;
        console.log(data);
        console.log('this Users');
        console.log(this.allUsers);

      });
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
  }




  delete(id) {
    this.userService.deleteUser(id).subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
