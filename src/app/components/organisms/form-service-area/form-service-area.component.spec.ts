import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceAreaComponent } from './form-service-area.component';

describe('FormServiceAreaComponent', () => {
  let component: FormServiceAreaComponent;
  let fixture: ComponentFixture<FormServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormServiceAreaComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should send service area on submit', () => {
    // Arrange: setup data for test case
    const eventEmiter = new EventEmitter<string>();
    const MOCK_SUBMIT: string = '1';
    eventEmiter.emit(MOCK_SUBMIT);

    // Act: invoke onSubmit method
    component.onSubmit();
    component.submitEventServiceArea.emit(MOCK_SUBMIT)

    // Assert: check the eventEmiter equal to MOCK_SUBMIT 
    expect(component.submitEventServiceArea).toEqual(eventEmiter)
  });
});
