import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let fixture: ComponentFixture<InputFieldComponent>;
  let component: InputFieldComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
