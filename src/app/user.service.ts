import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
// tslint:disable-next-line:import-spacing
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {

    constructor(private http: Http) {}

    login(user: string, pws: string): Observable<any> {
      return this.http.post('http://localhost:8080/SupportFormServices/rest/User/login?email=' + user +
      '&password=' + pws, {}).map(response => {return response.text()});

      //  return this.http.get("http://localhost:8080/WSEjemplo/rest/Usuario?login="+user+"&clave="+pws).
       // map(response=>{return response.text()})
    }

    getRequests() {
      return this.http.post('http://localhost:8080/SupportFormServices/rest/Request', {}).
      map(response => {return response.text()});
    }

}
