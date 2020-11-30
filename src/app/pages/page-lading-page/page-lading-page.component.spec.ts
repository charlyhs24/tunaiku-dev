import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLadingPageComponent } from './page-lading-page.component';

describe('PageLadingPageComponent', () => {
  let component: PageLadingPageComponent;
  let fixture: ComponentFixture<PageLadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
