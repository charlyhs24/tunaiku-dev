import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceAreaComponent } from './form-service-area.component';

describe('FormServiceAreaComponent', () => {
  let component: FormServiceAreaComponent;
  let fixture: ComponentFixture<FormServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServiceAreaComponent ]
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
});
