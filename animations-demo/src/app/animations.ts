import { transition, trigger, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({  opacity: 0 })),
    transition('void <=> *', [
        animate(2000)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: "translateX(-20px)"}),
        animate(1000)
     ]),
    transition(':leave', [
        animate('500ms ease-in' , style({ transform: "translateX(-100%)"}))
    ])
]);
