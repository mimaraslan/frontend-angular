import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  username: string = 'AngularServiceDemo';

  apiUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) {

  }


  getUsers (){
    return this.http.get(this.apiUrl+'users')
  }

}
