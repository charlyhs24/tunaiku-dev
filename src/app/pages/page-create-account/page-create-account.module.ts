import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCreateAccountRoutingModule } from './page-create-account-routing.module';
import { PageCreateAccountComponent } from './page-create-account.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TotalLoanComponent } from 'src/app/components/organisms/total-loan/total-loan.component';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';

@NgModule({
  declarations: [
    PageCreateAccountComponent,
    TotalLoanComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    PageCreateAccountRoutingModule,
    SharedModule,
    OrganismsModule
  ]
})
export class PageCreateAccountModule { }
