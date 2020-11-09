import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSubmittedDataComponent } from './success-submitted-data.component';

describe('SuccessSubmittedDataComponent', () => {
  let component: SuccessSubmittedDataComponent;
  let fixture: ComponentFixture<SuccessSubmittedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessSubmittedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
