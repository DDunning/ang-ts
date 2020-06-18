import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Like2Component } from './like2.component';

describe('Like2Component', () => {
  let component: Like2Component;
  let fixture: ComponentFixture<Like2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Like2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Like2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
