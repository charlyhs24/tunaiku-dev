import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunaikuSliderComponent } from './tunaiku-slider.component';

describe('TunaikuSliderComponent', () => {
  let component: TunaikuSliderComponent;
  let fixture: ComponentFixture<TunaikuSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunaikuSliderComponent ]
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
