import { BackendInterceptor } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,

    // for testing, intercept and respond to http requests
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
