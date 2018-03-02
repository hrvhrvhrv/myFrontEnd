import { Component, OnInit } from '@angular/core';
import { ReviewService} from "../services/review.service";
import { Review} from "../models/review";
import { Observable} from "rxjs/Observable";
import { Router, ActivatedRoute} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";

@Component({
  selector: 'app-view-single-review',
  templateUrl: './view-single-review.component.html',
  styleUrls: ['./view-single-review.component.css']
})
export class ViewSingleReviewComponent implements OnInit {
  singleReview: Review ;
  allReviews: Array<Review>;
  currentUser: User;

  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviewService.getReviewbyID(this.route.snapshot.params.id).subscribe(data => this.singleReview = data);
    console.log('Hiya pal' + Review );
    this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }


}
