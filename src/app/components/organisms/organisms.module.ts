import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanSliderComponent } from './loan-slider/loan-slider.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanSliderComponent],
  imports: [
    CommonModule,
    MoleculesModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [LoanSliderComponent]
})
export class OrganismsModule { }
