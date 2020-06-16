import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recase',
  templateUrl: './recase.component.html',
  styleUrls: ['./recase.component.css']
})
export class RecaseComponent implements OnInit {

  userInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event){
    this.userInput = $event.target.value;
  }

}
