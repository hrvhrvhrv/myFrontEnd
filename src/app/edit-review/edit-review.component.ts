import { Component, OnInit } from '@angular/core';
import { ReviewService} from "../services/review.service";
import { Review} from "../models/review";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {

  editReview: Review;

  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviewService.getReviewbyID(this.route.snapshot.params.id).subscribe(data => this.editReview = data);
  }

  edit() {
    this.reviewService.editReview(this.editReview).subscribe(res => {this.router.navigate(['/viewreview'])})
  }

}
