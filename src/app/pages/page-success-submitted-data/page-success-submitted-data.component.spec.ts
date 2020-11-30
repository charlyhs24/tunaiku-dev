import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuccessSubmittedDataComponent } from './page-success-submitted-data.component';

describe('PageSuccessSubmittedDataComponent', () => {
  let component: PageSuccessSubmittedDataComponent;
  let fixture: ComponentFixture<PageSuccessSubmittedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSuccessSubmittedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuccessSubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
