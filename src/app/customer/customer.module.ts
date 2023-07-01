import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule, CustomersRoutingModule
  ]
})
export class CustomerModule { }
