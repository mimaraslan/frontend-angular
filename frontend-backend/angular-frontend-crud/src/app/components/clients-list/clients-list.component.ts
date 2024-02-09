import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clients?: Client[];
  currentClient: Client = {};
  currentIndex = -1;
  firstName = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.retrieveClients();
  }

  retrieveClients(): void {
    this.clientService.getAll().subscribe({
      next: (data) => {
        this.clients = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveClients();
    this.currentClient = {};
    this.currentIndex = -1;
  }

  setActiveClient(client: Client, index: number): void {
    this.currentClient = client;
    this.currentIndex = index;
  }

  removeAllClients(): void {
    this.clientService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchFirstName(): void {
    this.currentClient = {};
    this.currentIndex = -1;

    this.clientService.findByFirstName(this.firstName).subscribe({
      next: (data) => {
        this.clients = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
