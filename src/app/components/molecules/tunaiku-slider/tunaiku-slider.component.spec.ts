import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { TunaikuSliderComponent } from './tunaiku-slider.component';

describe('TunaikuSliderComponent', () => {
  let fixture: ComponentFixture<TunaikuSliderComponent>;
  let component: TunaikuSliderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TunaikuSliderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunaikuSliderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
