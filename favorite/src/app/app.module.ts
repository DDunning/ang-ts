import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { RecaseComponent } from './recase/recase.component';
import { TitlecasePipe } from './titlecase.pipe';
import { Like2Component } from './like2/like2.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    RecaseComponent,
    TitlecasePipe,
    Like2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
