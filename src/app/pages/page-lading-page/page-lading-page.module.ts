import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLandingPageRoutingModule } from './page-landing-page-routing.module';
import { PageLadingPageComponent } from './page-lading-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { StatisticComponent } from 'src/app/components/organisms/statistic/statistic.component';
import { TestimonyComponent } from 'src/app/components/organisms/testimony/testimony.component';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';

@NgModule({
  declarations: [
    PageLadingPageComponent,
    StatisticComponent,
    TestimonyComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageLandingPageRoutingModule,
    MatSliderModule,
    MatCardModule,
    OrganismsModule
  ]
})
export class PageLadingPageModule { }
