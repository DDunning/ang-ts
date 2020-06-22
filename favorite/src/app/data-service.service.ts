import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/common/app-error'
import { BadInputError } from './common/bad-input-error';
import { NotFoundError } from './common/not-found-error';

// not injected itself, but its sub-classes are, so only decorate them with @Injectable.
export class DataService {

  constructor(private url: string, private http: HttpClient) {
   }

  private resourceUrl(id){
    return this.url + '/' + id
  }

  getAll() {
    return this.http.get(this.url, { observe: 'response', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  create(resource){
    return this.http.post(this.url, resource, { observe: 'body', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  update(id, changes){
    return this.http.patch(this.resourceUrl(id), changes, { observe: 'response', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  delete(id){
    return this.http.delete(this.resourceUrl(id), { observe: 'response', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }
  
  private handleError(error: Response){
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    if (error.status === 400)
      return throwError(new BadInputError());

    return throwError(new AppError(error))
  }
}
