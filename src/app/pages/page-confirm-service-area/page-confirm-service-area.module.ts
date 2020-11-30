import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfirmServiceAreaComponent } from './page-confirm-service-area.component';
import { PageConfirmServiceAreaRoutingModule } from './page-confirm-service-area-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormServiceAreaComponent } from 'src/app/components/organisms/form-service-area/form-service-area.component';

@NgModule({
  declarations: [
    PageConfirmServiceAreaComponent,
    FormServiceAreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatToolbarModule,
    PageConfirmServiceAreaRoutingModule,
    SharedModule
  ]
})
export class PageConfirmServiceAreaModule { }
