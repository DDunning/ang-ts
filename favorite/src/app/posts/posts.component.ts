import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

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
    .subscribe(response => {
      this.posts = response.body as any[];
      });
    }

    createPost(input: HTMLInputElement){
      let post = { title: input.value };
      input.value = '';
      
      this.service.postPosts(post)
      .subscribe(response => {
        post['id'] = (response as any).id;
        this.posts.splice(0, 0, post);
        });
    }

    updatePost(post){
      this.service.patchPosts(post.id, {isRead : true})
      .subscribe(response => {
        console.log(response as any);
        });
    }

    deletePost(post){
      this.service.deletePosts(post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1);
        })
    }

}
