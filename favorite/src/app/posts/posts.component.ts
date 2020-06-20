import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any[];
  
  
  constructor(private service: PostService){
  }
  
  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.body as any[];
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';
    
    this.service.postPosts(post)
    .subscribe(
      response => {
        post['id'] = (response as any).id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if (error.status ===400){
          // report it to the form.setError()
        }
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

  updatePost(post){
    this.service.patchPosts(post.id, {isRead : true})
    .subscribe(
      response => {
        console.log(response as any);
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post){
    this.service.deletePosts(345)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404)
          alert("This post has already been deleted.");
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

}
