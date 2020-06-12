class Point {
    // constructor, optional args, two fields declared and defined
	constructor(private x?: number, public y?: number) {
    }
    // fields
    u: number;
    private _a: number;
    // property getter and setter
    get a() {
        return this._a;
    }
    set a(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._a=value;
    }
}

let point1 = new Point();
let point2 = new Point(1, 2);
point1.a = 10;
let b = point2.a;



import { Component } from '@angular/core';

export class CoursesComponent{

}