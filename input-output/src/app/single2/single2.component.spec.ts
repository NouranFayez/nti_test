import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Single2Component } from './single2.component';

describe('Single2Component', () => {
  let component: Single2Component;
  let fixture: ComponentFixture<Single2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Single2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Single2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
