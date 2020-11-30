import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSuccessSubmittedDataComponent } from './page-success-submitted-data.component';
import { PageSuccessSubmittedDataRoutingModule } from './page-success-submitted-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PageSuccessSubmittedDataComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageSuccessSubmittedDataRoutingModule
  ]
})
export class PageSuccessSubmittedDataModule { }
