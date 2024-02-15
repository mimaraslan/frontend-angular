import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl+"/clients");
  }

  get(id: any): Observable<Client> {
    return this.http.get<Client>(`${baseUrl+"/clients"}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/clients", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+"/clients"}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+"/clients"}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl+"/clients");
  }

  findByFirstName(firstName: any): Observable<Client[]> {
    return this.http.get<Client[]>(`${baseUrl+"/clients"}?firstName=${firstName}`);
  }
}
