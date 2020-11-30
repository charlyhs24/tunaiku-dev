import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConfirmServiceAreaComponent } from './page-confirm-service-area.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PageConfirmServiceAreaComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PageConfirmServiceAreaRoutingModule { }
