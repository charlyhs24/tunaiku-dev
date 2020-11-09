import { Component } from '@angular/core';
import { NavbarService } from './services/navbar/navbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  NavbarStatus:boolean;
  constructor(private navbarService: NavbarService){
  }
  ngOnInit() {
    this.navbarService.updateNavbarStatus(true);
    this.navbarService.state$.subscribe((state) => {
      this.NavbarStatus = state.NAVIGATION_BAR;
    })
  }  
}
