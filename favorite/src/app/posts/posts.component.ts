import { BadInputError } from '../common/bad-input-error';
import { Component, OnInit } from '@angular/core';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';

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
    this.service.getAll()
    .subscribe(
      response => {
        this.posts = response.body as any[];
      },
      (error: AppError) => {
        if (error instanceof NotFoundError){
          alert("Cannot access the posts.");
        } else
          throw error;
      });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';
    
    this.service.create(post)
    .subscribe(
      response => {
        console.log(response);
        post['id'] = (response as any).id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInputError){
          // report error.originalErrorit to the form.setError()
        }
        else
          throw error;  // let the global handler pick it up
      });
  }

  updatePost(post){
    this.service.update(post.id, {isRead : true})
    .subscribe(
      response => {
        console.log(response as any);
      });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      response => {
      },
      (error: AppError) => {
        // reinstate the deleted post
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert("This post has already been deleted.");
        else
          throw error;
      });
  }

}
