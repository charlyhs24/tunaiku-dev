import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageSuccessSubmittedDataComponent } from './page-success-submitted-data.component';
const routes: Routes = [
  {
    path: '',
    component: PageSuccessSubmittedDataComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageSuccessSubmittedDataRoutingModule { }
