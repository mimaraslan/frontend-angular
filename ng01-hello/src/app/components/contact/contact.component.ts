import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  username!: string;

  users: any;

  constructor ( private userService:UserService ) {

  }

  ngOnInit(): void {
    this.username = this.userService.username;
    console.log('ContactComponent  this.username: ',  this.username);
    this.getUsersAll();
  }


  getUsersAll() {
    this.userService.getUsers()
    .subscribe(res => {
      console.log(res);
      this.users=res;
    });
  }

}
