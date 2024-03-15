import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Hello Angular";

  constructor(){}

  ngOnInit(): void {
    console.log('=== ngOnInit  ===');
    this.setTitle();
  }

  setTitle(){
    this.title = "LOLO";
  }

}
