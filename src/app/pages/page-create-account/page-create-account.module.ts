import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCreateAccountRoutingModule } from './page-create-account-routing.module';
import { PageCreateAccountComponent } from './page-create-account.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCreateAccountComponent } from 'src/app/components/organisms/form-create-account/form-create-account.component';
import { TotalLoanComponent } from 'src/app/components/organisms/total-loan/total-loan.component';
import { InputFieldComponent } from 'src/app/components/molecules/input-field/input-field.component';

@NgModule({
  declarations: [
    PageCreateAccountComponent,
    TotalLoanComponent,
    InputFieldComponent,
    FormCreateAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    PageCreateAccountRoutingModule,
    SharedModule
  ]
})
export class PageCreateAccountModule { }
