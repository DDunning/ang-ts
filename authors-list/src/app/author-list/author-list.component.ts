import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(public authors: AuthorsService) {
    
    // 

   }

  ngOnInit(): void {
  }

}
