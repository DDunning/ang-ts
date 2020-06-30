import { transition, trigger, style, animate, state, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
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
)

export let fadeInAnimation = animation([
    style({  opacity: 0 }),
    animate('{{ duration }} {{ easing }}')
    ], {
        params: {
            duration: '2s',
            easing: 'ease-out'
        }
    }
)

export let fade = trigger('fade', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ]),
    transition(':leave',
        animate(2000, style({  opacity: 0 }))
    )
]);

// using keyframes
export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: "translateX(-20px)"}),
        animate(1000)
    ]),
    // a bounce-out-left animation
    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    )
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
