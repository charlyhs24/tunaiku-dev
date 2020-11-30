import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateAccountComponent } from './page-create-account.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PageCreateAccountComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class PageCreateAccountRoutingModule { }
