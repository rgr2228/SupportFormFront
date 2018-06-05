import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {ServiciosService} from './user.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.html'
})

export class LoginComponent {

  userName = '';
    pws = '';
    errorMessage = '';

    OnLogin() {

    }
}
