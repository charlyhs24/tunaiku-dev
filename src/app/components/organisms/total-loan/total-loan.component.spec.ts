import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLoanComponent } from './total-loan.component';

describe('TotalLoanComponent', () => {
  let component: TotalLoanComponent;
  let fixture: ComponentFixture<TotalLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalLoanComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
