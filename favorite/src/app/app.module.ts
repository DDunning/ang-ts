import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { RecaseComponent } from './recase/recase.component';
import { TitlecasePipe } from './titlecase.pipe';
import { Like2Component } from './like2/like2.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LikeComponent,
    RecaseComponent,
    TitlecasePipe,
    Like2Component,
    CreateCourseFormComponent,
    PasswordChangeFormComponent,
    PostsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
