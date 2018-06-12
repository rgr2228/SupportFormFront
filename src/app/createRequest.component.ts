import { Request } from './request';
import { Router } from '@angular/router';
import { ServiciosService } from './user.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './createRequest.html',
    styleUrls: ['./app.component.css']
})

export class CreateRequestComponent {
  request: Request = {
    idRequest: '',
    date: '',
    eventTime: '',
    user: '',
    office: '',
    description: '',
    typeRequest: '',
    channel: '',
    priority: '',
    level: '',
    state: ''
  };
  errorMessage = '';

  constructor(public service: ServiciosService, public router: Router) {}

  onSave() {
    this.service.createRequest(this.request).subscribe(
      result => {
        console.log(result);
        if (result['idRequest'] !== '') {
          this.router.navigate(['/requests']);
        } else if ( result === null) {
          alert('Usuario no encontrado');
        }

    }
    );
  }

}
