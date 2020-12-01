import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MobileNavbarComponent } from './mobile-navbar.component';

describe('MobileNavbarComponent', () => {
  let component: MobileNavbarComponent;
  let fixture: ComponentFixture<MobileNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavbarComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to `confirm-service-area` if title equal to `Ajukan Pinjaman`', () => {
    // Arrange: setup data for test case
    const MOCK_TITLE = "Ajukan Pinjaman";
    component.title = MOCK_TITLE;
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke navigateHandler method
    component.navigateHandler();
    // Assert: check the route equal to 'confirm-service-area'
    expect(component.route.navigate).toHaveBeenCalledWith(['/confirm-service-area']);
  })
  it('should navigate to `home` if title equal to `Area Layanan`', () => {
    // Arrange: setup data for test case
    const MOCK_TITLE = "Area Layanan";
    component.title = MOCK_TITLE;
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke navigateHandler method
    component.navigateHandler();

    // Assert: check the route equal to 'home'
    expect(component.route.navigate).toHaveBeenCalledWith(['/home']);
  })
  it('should navigate to `home` if title undefined', () => {
    // Arrange: setup data for test case
    const MOCK_TITLE = "";
    component.title = MOCK_TITLE;
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke navigateHandler method
    component.navigateHandler();

    // Assert: check the route equal to 'home'
    expect(component.route.navigate).toHaveBeenCalledWith(['/home']);
  })
});
