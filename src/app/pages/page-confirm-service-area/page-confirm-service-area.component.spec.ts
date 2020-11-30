import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmServiceAreaComponent } from './page-confirm-service-area.component';

describe('PageConfirmServiceAreaComponent', () => {
  let component: PageConfirmServiceAreaComponent;
  let fixture: ComponentFixture<PageConfirmServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfirmServiceAreaComponent ]
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
});
