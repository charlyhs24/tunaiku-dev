import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanSliderComponent } from './loan-slider/loan-slider.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreateAccountComponent } from './form-create-account/form-create-account.component';

@NgModule({
  declarations: [LoanSliderComponent, FormCreateAccountComponent],
  imports: [
    CommonModule,
    MoleculesModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [LoanSliderComponent,
    FormCreateAccountComponent]
})
export class OrganismsModule { }
