import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  students:string[] = [];

  students2: any[] = [
    { id: 12, name : 'Jakov', age: 28 },
    { id: 14, name : 'Marko', age: 27 }
  ];

  students3: any[] = [
    { id: 12, name : 'Jakov', age: 25 },
    { id: 14, name : 'Marko', age: 24 }
  ];

  constructor(){}

  ngOnInit(): void {
    console.log("Hello app-home");
    this.students = ['A','S','L','A','N'];

    this.students2 = [
      {
      firstName: 'BTC',
      age: 20
     },
     {
      firstName: 'ETH',
      age: 10
     },
     {
      firstName: 'SOL',
      age: 15
     }
  ];
  }

}
