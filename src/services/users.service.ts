import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


export interface UserResponse {
  repeat_true_customers: User[]; 
  repeat_false_customers: User[];
}

interface User {
  nombre: string;
  telefono: string;
  correo: string;
  emailClass: string; // Nueva propiedad
  phoneClass: string; // Nueva propiedad
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(environment.apiUrl + 'api/user-customer/');
  }
  
  
}
