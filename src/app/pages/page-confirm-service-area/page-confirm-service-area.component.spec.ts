import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageConfirmServiceAreaComponent } from './page-confirm-service-area.component';

describe('PageConfirmServiceAreaComponent', () => {
  let component: PageConfirmServiceAreaComponent;
  let fixture: ComponentFixture<PageConfirmServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageConfirmServiceAreaComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit data service area to loan service and navigate to `create-account`', () => {
    // Arrange: setup data for test case
    const MOCK_CITY: string = 'Jakarta';
    spyOn(component.route, 'navigate').and.returnValue(Promise.resolve(true));

    // Act: invoke onSubmit method
    component.onSubmit(MOCK_CITY)

    // Assert: check the state equal to MOCK_CITY 
    expect(component.loan.state.serviceArea).toEqual(MOCK_CITY);
    expect(component.route.navigate).toHaveBeenCalledWith(['/create-account']);
  })
});
