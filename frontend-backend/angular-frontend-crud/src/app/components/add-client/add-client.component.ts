import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  client: Client = {
    firstName: '',
    lastName: '',
    confirmed: false
  };
  submitted = false;

  constructor(private clientService: ClientService) {}

  saveClient(): void {
    const data = {
      firstName: this.client.firstName,
      lastName: this.client.lastName
    };

    this.clientService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newClient(): void {
    this.submitted = false;
    this.client = {
      firstName: '',
      lastName: '',
      confirmed: false
    };
  }
}
