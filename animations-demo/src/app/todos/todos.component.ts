import { Component } from '@angular/core';
import { transition, trigger, style, animate, state } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: "translateX(-20px)"}),
        animate(1000) ]),
      transition(':leave', [
        animate(500), style({ transform: "translateX(-200px)"}) ])
    ]),

    trigger('slideOut', [
      state('void', style({ transform: "translateX(-200px)"})),
      transition('* => void', [ animate(500) ])
    ]),

    trigger('fade', [
      state('void', style({  opacity: 0 })),
      transition('void <=> *', [ animate(2000) ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
