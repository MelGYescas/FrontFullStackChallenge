import { Component } from '@angular/core';
import { UsersService } from 'src/services/users.service';

interface UserResponse {
  repeat_true_customers: Customer[];
  repeat_false_customers: Customer[];
}

interface Customer {
  nombre: string;
  telefono: string;
  correo: string;
  emailClass: string;
  phoneClass: string;
}

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})

export class ViewDataComponent {
  public customers: UserResponse = {
    repeat_true_customers: [],
    repeat_false_customers: []
  };


  constructor(private userService: UsersService) { }


  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.customers.repeat_true_customers = response.repeat_true_customers.map(customer => {
        const isValidEmail = this.isValidEmail(customer.correo);
        const isValidPhoneNumber = this.isValidPhoneNumber(customer.telefono);
        return {
            ...customer,
            emailClass: isValidEmail ? '' : 'bg--yellow',
            phoneClass: isValidPhoneNumber ? '' : 'bg--yellow'
        };
      });
    
      //items no 
      this.customers.repeat_false_customers = response.repeat_false_customers.map(customer => {
        const isValidEmail = this.isValidEmail(customer.correo);
        const isValidPhoneNumber = this.isValidPhoneNumber(customer.telefono);
        return {
            ...customer,
            emailClass: isValidEmail ? '' : 'bg--yellow',
            phoneClass: isValidPhoneNumber ? '' : 'bg--yellow'
        };
      });
    
    });
  }

  public isValidPhoneNumber(phoneNumber: string): boolean {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }
  
  public isValidEmail(email: string): boolean {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }
}
