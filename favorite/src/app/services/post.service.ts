import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  
  private static url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super(PostService.url, http);
  }
}
