import { TestBed } from '@angular/core/testing';
import { NavbarState } from './navbar-state';

import { NavbarService } from './navbar.service';

describe('NavbarService', () => {
  let navbar: NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarService]
    })
  });

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
  it('should correctly add new navbar state', () => {
    // Arrange: setup data for test case
    navbar = new NavbarService();
    const MOCK_NAVBAR: NavbarState = {
      NAVIGATION_BAR: false
    }
    // Act: invoke setState method
    navbar.setState(MOCK_NAVBAR)
    // Assert: check the state equal to MOCK_NAVBAR 
    expect(navbar.state).toEqual(MOCK_NAVBAR);
  })
  it('should correctly change status navbar', () => {
    // Arrange: setup data for test case
    navbar = new NavbarService();
    const navbarStatus = true;

    // Act: invoke updateNavbarStatus method
    navbar.updateNavbarStatus(navbarStatus);

    // Assert: check the state equal to navbarStatus 
    expect(navbar.state.NAVIGATION_BAR).toEqual(navbarStatus);
  })
});
