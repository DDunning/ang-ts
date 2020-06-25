import { JwtHelperService  } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  // returns an observable of a boolean
  login(credentials)  { 
    return this.http.post('/api/authenticate', credentials, {observe: 'body'})
      .pipe( map( response => {
      if ( response && response['token']){
        console.log("token: " +  response['token'])
        localStorage.setItem('token', response['token']);
        return true;
      }
      else {
        localStorage.removeItem('token');
        return false;
      }
    }));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    let token = localStorage.getItem('token');
    if (token == null)
      return false;

    let jwtHelper = new JwtHelperService();
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    
    return new JwtHelperService().decodeToken(token);
  }
}

