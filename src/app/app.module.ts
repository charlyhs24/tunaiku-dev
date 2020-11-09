import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ConfirmServiceAreaComponent } from './components/confirm-service-area/confirm-service-area.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { LoanSliderComponent } from './components/loan-slider/loan-slider.component';
import {MatRadioModule} from '@angular/material/radio';
import { MobileNavbarComponent } from './layout/mobile-navbar/mobile-navbar.component';
import { SuccessSubmittedDataComponent } from './components/success-submitted-data/success-submitted-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreateAccountComponent,
    ConfirmServiceAreaComponent,
    NavbarComponent,
    FooterComponent,
    StatisticComponent,
    TestimonyComponent,
    LoanSliderComponent,
    MobileNavbarComponent,
    SuccessSubmittedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
