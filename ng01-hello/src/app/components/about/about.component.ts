import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

 // username!: string;

  constructor ( public userService:UserService ) {

  }

  ngOnInit(): void {
 //   this.username = this.userService.username;
  }

}
