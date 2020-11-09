import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmServiceAreaComponent } from './components/confirm-service-area/confirm-service-area.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SuccessSubmittedDataComponent } from './components/success-submitted-data/success-submitted-data.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path:'create-account',
    component: CreateAccountComponent
  },
  {
    path:'confirm-service-area',
    component: ConfirmServiceAreaComponent
  },
  {
    path:'success-submitted-data',
    component: SuccessSubmittedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
