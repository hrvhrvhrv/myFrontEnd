import { Component, OnInit } from '@angular/core';
import { ReviewService} from "../services/review.service";
import { Review} from "../models/review";
import { Router, ActivatedRoute} from "@angular/router";
import { CommentService} from "../services/comment.service";
import { Comment} from "../models/comment";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";

@Component({
  selector: 'app-view-single-review',
  templateUrl: './view-single-review.component.html',
  styleUrls: ['./view-single-review.component.css']
})
export class ViewSingleReviewComponent implements OnInit {
  singleReview: Review ;
  currentUser: User;
  allComments: Array<Comment>;
  newComment = new Comment();

  editComment: boolean = false;

  changeValue() {
    this.editComment = !this.editComment;
  }

  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private route: ActivatedRoute, private commentService: CommentService, private router: Router) { }

  ngOnInit() {
    this.reviewService.getReviewbyID(this.route.snapshot.params.id).subscribe(data => this.singleReview = data);
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);
    this.commentService.getAllCommentsOnPost(this.route.snapshot.params.id).subscribe(data => this.allComments = data);
  }

  createComment(id){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newComment.author = this.currentUser._id;
    this.newComment.postID = id;
    console.log(this.newComment);

    this.commentService.create(this.newComment)
      .subscribe(res => {
        let id = res['_id'];
        // this.router.navigate(['/']);
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
