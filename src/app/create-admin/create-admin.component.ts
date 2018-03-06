import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthLoginService} from "../services/auth-login.service";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  currentUser: User;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userService.getUserByID(this.route.snapshot.params.id).subscribe(data => this.currentUser = data);
  }

  edit() {

    this.userService.editUser(this.currentUser).subscribe(res => {
      this.router.navigate(['/usermanager'])
    })

  }

}
