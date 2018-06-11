import { Component } from '@angular/core';
import {Request} from './request';
import { Http } from '@angular/http';
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './requestList.html',
    styleUrls: ['./requestList.component.css']
})

export class RequestListComponent {
  requests: Request[];

  constructor(public service: ServiciosService, public router: Router) {
    this.service.getRequests().subscribe(
      result => {
        const obj = JSON.parse(result);
        this.requests = obj.request;
      }
    );
  }

  onNew() {
    this.router.navigate(['/createRequest']);
  }

}
