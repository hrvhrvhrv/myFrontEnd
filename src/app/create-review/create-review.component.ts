import { Component, OnInit } from '@angular/core';
import { ReviewService} from "../services/review.service";
import { Review} from "../models/review";
import { Observable} from "rxjs/Observable";
import { Router} from "@angular/router";
import { User} from "../models/user";
import { AuthLoginService} from "../services/auth-login.service";
import {appConfig} from "../app.config";
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  htmlContent: string;
  newReview = new Review();
  currentUser = new User();


// director = new FormControl();


  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private router: Router) { }

  ngOnInit() {
    // this.authService.currentUserObserver.subscribe(currentUser => this.currentUser = currentUser);

  }

  createReview(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newReview.reviewer = this.currentUser._id;
    console.log(this.newReview);

      this.reviewService.create(this.newReview)
        .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/']);
      }); (err) => {
        console.log(err);
    }
  }




}


