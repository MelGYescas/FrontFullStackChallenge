import { Injectable } from '@angular/core';
// import { ReceptionService } from './reception.service';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  endpointUrl = 'http://127.0.0.1:8000/api/user-customer/';

  // // constructor(private http: HttpClient) { }

  // miMetodo() {
  //   return this.http.get(this.endpointUrl);
  }
}
