import { Component, OnInit } from '@angular/core';
import { AnnouncementService} from "../services/announcement.service";
import { Announcement} from "../models/announcement";
import { CommentService} from "../services/comment.service";
import { Comment} from "../models/comment";
import { Router, ActivatedRoute} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";


@Component({
  selector: 'app-view-single-announcement',
  templateUrl: './view-single-announcement.component.html',
  styleUrls: ['./view-single-announcement.component.css']
})
export class ViewSingleAnnouncementComponent implements OnInit {

  singleAnnouncement: Announcement;
  currentUser: User;
  allComments: Array<Comment>;
  newComment = new Comment();

  editComment: boolean = false;

  changeValue() {
    this.editComment = !this.editComment;
  }

  constructor(private announcementService: AnnouncementService, private authService: AuthLoginService, private route: ActivatedRoute, private commentService: CommentService, private router: Router) { }

  ngOnInit() {
    this.announcementService.getAnnouncementByID(this.route.snapshot.params.id).subscribe(data => this.singleAnnouncement = data);
    this.commentService.getAllCommentsOnPost(this.route.snapshot.params.id).subscribe(data => this.allComments = data);
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
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
      });

  }

  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(res => {
        this.router.navigate(['/viewAnnouncement']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
