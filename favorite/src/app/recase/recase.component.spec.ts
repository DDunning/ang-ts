import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaseComponent } from './recase.component';

describe('RecaseComponent', () => {
  let component: RecaseComponent;
  let fixture: ComponentFixture<RecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
