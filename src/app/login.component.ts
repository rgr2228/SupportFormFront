import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.html',
    styleUrls: ['./app.component.css']
})

export class LoginComponent {

  userName = '';
  pws = '';
  errorMessage = '';

  constructor(public service: ServiciosService, public router: Router) {}

    OnLogin() {
      alert('Click');
      this.service.login(this.userName, this.pws).subscribe(
        result => {
          alert('Autentico');
          this.router.navigate(['/requests']);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
}
