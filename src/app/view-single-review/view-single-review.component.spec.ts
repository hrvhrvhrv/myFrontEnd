import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleReviewComponent } from './view-single-review.component';

describe('ViewSingleReviewComponent', () => {
  let component: ViewSingleReviewComponent;
  let fixture: ComponentFixture<ViewSingleReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
