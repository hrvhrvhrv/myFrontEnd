import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import { AdminGuard} from "./guards/admin.guard";

//  new components added 14/02/18
import { CreateReviewComponent} from "./create-review/create-review.component";
import { EditReviewComponent} from "./edit-review/edit-review.component";
import { MyReviewsComponent} from "./my-reviews/my-reviews.component";
import { EditUserProfileComponent} from "./edit-user-profile/edit-user-profile.component";
import { CreateAdminComponent} from "./create-admin/create-admin.component";
import { UserManagementComponent} from "./user-management/user-management.component";
import { AboutUsComponent} from "./about-us/about-us.component";
import { ContactUsComponent} from "./contact-us/contact-us.component";
import { WhereWeAreComponent} from "./where-we-are/where-we-are.component";
import { AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import { ViewReviewsComponent} from "./view-reviews/view-reviews.component";
import { ViewAnnouncementComponent} from "./view-announcement/view-announcement.component";
import { CreateAnnouncementComponent} from "./create-announcement/create-announcement.component";
import { ViewSingleReviewComponent} from "./view-single-review/view-single-review.component";
import {ViewSingleAnnouncementComponent} from "./view-single-announcement/view-single-announcement.component";
import { EditAnnouncementComponent} from "./edit-announcement/edit-announcement.component";

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: {
      depth: 1
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Log In',
      depth: 4

    }
  },
  {
    path: 'logout',
    component: LoginComponent,
    data: {
      title: 'logout',
    depth: 3
    }
  },
  {path: 'register',
    component: RegisterComponent,
    data : {
    title : 'register',
    depth: 1
    }

  },
  {
    path: 'viewreview',
    component: ViewReviewsComponent,
    data: {
      title:'Views Review',
      depth: 2
    }

  },{
    path: 'createreview',
    component: CreateReviewComponent,
    canActivate: [AuthGuard],

    data: {
      title:'Create Review',
      depth: 3
    }

  },
  {
    path: 'editReview/:id',
    component: EditReviewComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Edit Review',
      depth: 1
    }

  },{
    path: 'editAnnouncement/:id',
    component: EditAnnouncementComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Edit Review',
      depth: 1
    }

  },
  {
    path: 'viewAnnouncement',
    component: ViewAnnouncementComponent,
    data: {
      title:'Views Announcement',
      depth: 3
    }

  },
  {
    path: 'createAnnouncement',
    component: CreateAnnouncementComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Create Announcement',
      depth: 3
    }

  },
  {
    path: 'myreviews',
    component: MyReviewsComponent,
    canActivate: [AuthGuard],
    data: {
      title:'My Reviews',
      depth: 2
    }

  },
  {
    path: 'myprofile',
    component: EditUserProfileComponent,
    canActivate: [AuthGuard],
    data: {
      title:'My Profile',
      depth: 3
    }

  },
  {
    path: 'createadmin/:id',
    component: CreateAdminComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Create Admin',
      depth: 3
    }

  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title:'Admin dashboard',
      depth: 2
    }

  },
  {
    path: 'usermanager',
    component: UserManagementComponent,
    canActivate: [AuthGuard],
    data: {
      title:'User Management',
      depth: 2
    }

  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    data: {
      title:'About Us',
      depth: 2
    }

  },
  {
    path: 'wheretofindus',
    component: WhereWeAreComponent,
    data: {
      title:'About Us',
      depth: 2
    }

  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    data: {
      title:'Contact Us',
      depth: 2
    }

  },
  {
    path: 'viewReviewOne/:id',
    component: ViewSingleReviewComponent,
    data: {
      title:'Contact Us',
      depth: 4
    }

  },
  {
    path: 'viewAnnouncementOne/:id',
    component: ViewSingleAnnouncementComponent,
    data: {
      title:'Contact Us',
      depth: 4
    }

  }

  ];



export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
