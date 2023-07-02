import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  welcomeMessage:string = 'Welcome to Customer page!';
  CustomerModel : CustomerModel = new CustomerModel();
  customers: CustomerModel [] = [
    {
      id: 9999,
      name: 'Test name',
      city: 'Test city',
      state: 'ST'
    },
    {
      id: 1000,
      name: 'shani',
      city: 'Test city',
      state: 'ST'
    },
    {
      id: 1001,
      name: 'Shobhna',
      city: 'krakow',
      state: 'ST'
    }
  ];
  addCustomer(){
    this.customers.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel();
  }


}
