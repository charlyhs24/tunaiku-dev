import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent } from '../layout/mobile-navbar/mobile-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MobileNavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [MobileNavbarComponent]
})
export class SharedModule { }
