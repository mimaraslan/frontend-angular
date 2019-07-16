import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  myposts$: object;
  
  constructor(private mydata: DataService) { }

  ngOnInit() {
    this.mydata.getPosts().subscribe(
      mydata => this.myposts$ = mydata 
    );
  }

}