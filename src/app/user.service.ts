import { Request } from './request';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {

    constructor(private http: Http) {}

    login(user: string, pws: string): Observable<any> {
      // return this.http.post('http://localhost:8080/SupportFormServices/rest/User/login?email=' + user +
      // '&password=' + pws, {}).map(response => {return response.text()});

      return this.http.post('http://localhost:8080/SupportFormServices/rest/User/login', {'email': user , 'password': pws})
      .map(response => response.text());

      //  return this.http.get("http://localhost:8080/WSEjemplo/rest/Usuario?login="+user+"&clave="+pws).
       // map(response=>{return response.text()})
    }

    getRequests() {
      return this.http.get('http://localhost:8080/SupportFormServices/rest/Request', {}).
      map(response => response.text());
    }

    createRequest(requestWS: Request) {
      return this.http.post('http://localhost:8080/SupportFormServices/rest/Request/create', {'eventTime': requestWS.eventTime,
      'user': requestWS.user, 'office': requestWS.office, 'description': requestWS.description, 'typeRequest': requestWS.typeRequest,
    'channel': requestWS.channel, 'priority': requestWS.priority, 'level': requestWS.level, 'state': requestWS.state})
      .map(response => response.text());
    }

}
