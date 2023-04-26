import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReceptionUsersService {
  constructor(private http: HttpClient) { }

  uploadCsv(formData: FormData): Observable<any> {
    const url = environment.apiUrl + 'reception/';
    return this.http.post(url, formData);
  }
}
