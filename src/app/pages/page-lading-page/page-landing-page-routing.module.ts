import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLadingPageComponent } from './page-lading-page.component';
const ROUTES: Routes = [
  {
    path: '',
    component: PageLadingPageComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class PageLandingPageRoutingModule { }
