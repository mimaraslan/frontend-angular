import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  myuser$: object;

  constructor(private route: ActivatedRoute, private mydata: DataService) { 
     this.route.params.subscribe( params => this.myuser$ = params.id );
  }

  ngOnInit() {
    this.mydata.getUser(this.myuser$).subscribe(
      mydata => this.myuser$ = mydata
      );
  }

}