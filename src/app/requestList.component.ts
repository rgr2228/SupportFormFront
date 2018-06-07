import { Component } from '@angular/core';
import {Request} from './request';
import { Http } from '@angular/http';
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './requestList.html'
})

export class RequestListComponent {
  requests: Request[];

  constructor(public service: ServiciosService, public router: Router) {
    this.service.getRequests().subscribe(
      result => {
        var obj = JSON.parse(result);
        this.requests = obj.clienteWS;
      }
    );
  }

  onNew() {
    this.router.navigate(['/createRequest']);
  }

}
