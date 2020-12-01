import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyComponent } from './testimony.component';

describe('TestimonyComponent', () => {
  let component: TestimonyComponent;
  let fixture: ComponentFixture<TestimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonyComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with data testimony', () => {
    // Arrange: setup data for test case
    const MOCK_TESTIMONY = [
      {
        name: "Murad Dn",
        credit: "Rp5.000.000",
        age: "41 tahun",
        url_picture: "assets/Amar-Bank.svg",
        description: "Pinjaman mudah, anak bisa sekolah dengan nyaman."
      },
      {
        name: "Kasriasih",
        credit: "Rp10.000.000",
        age: "48 tahun",
        url_picture: "assets/Amar-Bank.svg",
        description: "Pinjaman mudah, anak bisa sekolah dengan nyaman."
      },
      {
        name: "Sarsih Handayani",
        credit: "Rp10.000.000",
        age: "37 tahun",
        url_picture: "assets/Amar-Bank.svg",
        description: "Tunaiku memberikan kemudahan untuk memperoleh dana, terutama saat dana darurat menipis dan asuransi sudah limit."
      },
      {
        name: "Faizal Wirya Widodo",
        credit: "Rp2.000.000",
        age: "26 tahun",
        url_picture: "assets/Amar-Bank.svg",
        description: "Pelayanan Tunaiku sangatlah baik, keamanannya terjamin"
      }
    ];
    // Act: invoke lifecycle method
    component.ngOnInit();
    // Assert: check the property of TESTIMONY equal to MOCK_TESTIMONY 
    expect(component.TESTIMONY).toEqual(MOCK_TESTIMONY);
  });
});
