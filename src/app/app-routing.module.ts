import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/page-lading-page/page-lading-page.module').then((module) => module.PageLadingPageModule)
  },
  {
    path: 'confirm-service-area',
    loadChildren: () => import('./pages/page-confirm-service-area/page-confirm-service-area.module').then((module) => module.PageConfirmServiceAreaModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/page-create-account/page-create-account.module').then((module) => module.PageCreateAccountModule)
  },
  {
    path: 'success-submitted-data',
    loadChildren: () => import('./pages/page-success-submitted-data/page-success-submitted-data.module').then((module) => module.PageSuccessSubmittedDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
