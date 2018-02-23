import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MatStepperModule} from "@angular/material";
// import our services
import {AuthLoginService} from './services/auth-login.service';
import { ReviewService} from "./services/review.service";
import {AlertService, AuthRegisterService} from './services/auth-register.service';
import { AppRouting } from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from "./guards/admin.guard";
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './directives/alert/alert.component';
import {ErrorInterceptorProvider} from './services/helper/error.interceptor';
import {JwtInterceptorProvider} from './services/helper/jwt.interceptor';
import { MenuComponent } from './menu/menu.component';
//  import for material
import {
  MatMenuModule, MatCommonModule, MatButtonModule, MatCardModule, MatToolbarModule,
  MatFormFieldModule, MatDatepickerModule, MatInputModule, MatSidenavModule, MatAutocompleteModule, MatCheckboxModule,
  MatGridListModule, MatDialogModule, MatLineModule, MatChipsModule, MatExpansionModule, MatProgressBarModule,
  MatRadioModule, MatNativeDateModule, MatListModule
} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { NgxEditorModule} from "ngx-editor";
import { AngularFontAwesomeModule} from "angular-font-awesome";
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ViewAnnouncementComponent } from './view-announcement/view-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MenuComponent,
    CreateReviewComponent,
    EditReviewComponent,
    MyReviewsComponent,
    EditUserProfileComponent,
    CreateAdminComponent,
    UserManagementComponent,
    AboutUsComponent,
    ContactUsComponent,
    WhereWeAreComponent,
    AdminDashboardComponent,
    ViewReviewsComponent,
    ViewAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    MatMenuModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatLineModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule,
    MatListModule,
    NgxEditorModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatStepperModule


  ],//our service providers
  providers: [AuthRegisterService,
              AuthLoginService,
              AuthGuard,
              AdminGuard,
              AlertService,
              ReviewService,
              JwtInterceptorProvider,
              ErrorInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





