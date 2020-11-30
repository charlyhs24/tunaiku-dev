import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { TunaikuSliderComponent } from './tunaiku-slider/tunaiku-slider.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [InputFieldComponent, TunaikuSliderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  exports: [InputFieldComponent, TunaikuSliderComponent]
})
export class MoleculesModule { }
