import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like2',
  templateUrl: './like2.component.html',
  styleUrls: ['./like2.component.css']
})
export class Like2Component implements OnInit {

  @Input() likesCount: number;
  @Input() isActive: boolean;

  constructor() { }

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? +1 : -1;

  }

  ngOnInit(): void {
  }

}
