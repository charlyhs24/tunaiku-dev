import { Component, OnInit } from '@angular/core';

export interface ITestimony {
  name: string;
  credit: string;
  age: string;
  url_picture: string;
  description: string;
}
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  TESTIMONY: Array<ITestimony>;
  constructor() { }

  ngOnInit() {
    this.TESTIMONY = [
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
    ]
  }

}
