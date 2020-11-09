import { Injectable } from '@angular/core';
import { Store } from '../store';
import { NavbarState } from './navbar-state';

@Injectable({
  providedIn: 'root'
})
export class NavbarService extends Store<NavbarState> {

  constructor() {
    super(new NavbarState());
  }
  updateNavbarStatus(status:boolean):void{
    this.setState({
      ...this.state,
      NAVIGATION_BAR:status
    });
  }
}
