import { Component, OnInit } from '@angular/core';
import { CommentService} from "../services/comment.service";
import { Comment} from "../models/comment";
import { Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";
import { appConfig} from "../app.config";


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  // htmlContent: string;
  // newComment = new Comment();
  // currentUser = new User();

  constructor(
    // private commentService: CommentService, private authService: AuthLoginService, private router: Router
  ) { }

  ngOnInit() {
    // this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
  }

  // createComment(){
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.newComment.author = this.currentUser._id;
  //   console.log(this.newComment);
  //
  //   this.commentService.create(this.newComment)
  //     .subscribe(res => {
  //       let id = res['_id'];
  //       this.router.navigate(['/viewAnnouncement']);
  //     }); (err) => {
  //     console.log(err);
  //   }
  // }

}
