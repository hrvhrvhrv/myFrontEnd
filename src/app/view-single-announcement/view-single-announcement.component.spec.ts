import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleAnnouncementComponent } from './view-single-announcement.component';

describe('ViewSingleAnnouncementComponent', () => {
  let component: ViewSingleAnnouncementComponent;
  let fixture: ComponentFixture<ViewSingleAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
