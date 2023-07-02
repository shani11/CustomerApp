import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule, CustomersRoutingModule, FormsModule
  ]
})
export class CustomerModule { }
