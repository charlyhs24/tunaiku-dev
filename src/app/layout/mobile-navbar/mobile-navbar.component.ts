import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {
  @Input('title') title: string;
  constructor(public route: Router, private navbar: NavbarService) { }

  ngOnInit() {
  }
  navigateHandler() {
    switch (this.title) {
      case "Ajukan Pinjaman":
        this.route.navigate(['/confirm-service-area']);
        break;
      case "Area Layanan":
        this.navbar.updateNavbarStatus(true);
        this.route.navigate(['/home']);
        break;
      default:
        this.navbar.updateNavbarStatus(true);
        this.route.navigate(['/home']);
        break;
    }
  }
}
