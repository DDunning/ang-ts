import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AppError } from 'src/app/common/app-error'
import { BadInputError } from '../common/bad-input-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://jsonplaceholder.typicode.com/posts';

  private postUrl(id){
    return this.url + '/' + id
  }

  getPosts() {
    return this.http.get(this.url, { observe: 'response', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  createPost(post){
    return this.http.post(this.url, post, { observe: 'body', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  updatePost(id, changes){
    return this.http.patch(this.postUrl(id), changes, { observe: 'response', responseType: 'json' })
    .pipe ( catchError( this.handleError));
  }

  deletePost(id){
    return this.http.delete(this.postUrl(id), { observe: 'response', responseType: 'json' })
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
