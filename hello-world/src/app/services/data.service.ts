import { HttpClient } from '@angular/common/http';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url, { observe: 'response', responseType: 'json' })
      .pipe( catchError(this.handleError));
  }

  get(id) { 
    return this.http.get(this.url + '/' + id, { observe: 'body', responseType: 'json' })
    .pipe( catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, { observe: 'response', responseType: 'json' })
    .pipe( catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id,  { observe: 'response', responseType: 'json' })
    .pipe( catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe( catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
  
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
