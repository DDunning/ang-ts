import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowersService) {

  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(
      response => {
        this.followers = response.body as any[];
      },
      (error: AppError) => {
        if (error instanceof NotFoundError){
          alert("Cannot access the followers.");
        } else
          throw error;
      });

  }

}
