import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url, { observe: 'response', responseType: 'json' });
  }

  postPosts(post){
    return this.http.post(this.url, post, { observe: 'response', responseType: 'json' });
  }

  patchPosts(id, changes){
    return this.http.patch(this.postUrl(id), changes, { observe: 'response', responseType: 'json' });
  }

  deletePosts(id){
    return this.http.delete(this.postUrl(id), { observe: 'response', responseType: 'json' });
  }

  postUrl(id){
    return this.url + '/' + id
  }
}
