import { Component, OnInit } from '@angular/core';
import { AnnouncementService} from "../services/announcement.service";
import { Announcement} from "../models/announcement";
import { Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";
import {appConfig} from "../app.config";
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  htmlContent: string;
  newAnnouncement = new Announcement();
  currentUser = new User();

  constructor(private announcementService: AnnouncementService, private authService: AuthLoginService, private router: Router ) { }

  ngOnInit() {
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }

  createAnnouncement(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newAnnouncement.author = this.currentUser._id;
    console.log(this.newAnnouncement);

    this.announcementService.create(this.newAnnouncement)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/viewAnnouncement']);
      }); (err) => {
      console.log(err);
    }
  }

}
