import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { RecaseComponent } from './recase/recase.component';
import { TitlecasePipe } from './titlecase.pipe';
import { Like2Component } from './like2/like2.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LikeComponent,
    RecaseComponent,
    TitlecasePipe,
    Like2Component,
    CreateCourseFormComponent,
    PasswordChangeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
