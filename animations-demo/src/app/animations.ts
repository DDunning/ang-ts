import { transition, trigger, style, animate, state, keyframes } from '@angular/animations';

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
    // a bounce-out-left animation
    transition(':leave', [
        animate('500ms ease-in', keyframes([
            style({
                offset: 0.2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]))
    ])
]);

export let slide1 = trigger('slide-1', [
    transition(':enter', [
        style({ transform: "translateX(-20px)"}),
        animate(1000)
     ]),
    transition(':leave', [
        animate('500ms ease-in' , style({ transform: "translateX(-100%)"}))
    ])
]);
