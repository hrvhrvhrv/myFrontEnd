import { Component, OnInit } from '@angular/core';
import { AnnouncementService} from "../services/announcement.service";
import { Announcement} from "../models/announcement";
import { CommentService} from "../services/comment.service";
import { Comment} from "../models/comment";
import { Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";



@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {

  allAnnouncements: Array<Announcement>;
  currentUser:  User;
  newComment = new Comment();



  constructor(private announcementService: AnnouncementService, private commentService: CommentService , private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {
    this.announcementService.getAllAnnouncements().subscribe(
      data =>{
       this.allAnnouncements = data;

      });
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }

  deleteAnnouncement(id) {
    this.announcementService.deleteAnnouncement(id).subscribe(res => {
        this.router.navigate(['/viewAnnouncement']);
      }, (err) => {
        console.log(err);
      }
    );
  }

  createComment(id){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newComment.author = this.currentUser._id;
    this.newComment.postID = id;
    console.log(this.newComment);

    this.commentService.create(this.newComment)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/viewAnnouncement']);
      }); (err) => {
      console.log(err);
    }
  }

}
