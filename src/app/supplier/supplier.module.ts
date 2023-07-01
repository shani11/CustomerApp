import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './suppliers-routing.module';
import { SupplierComponent } from './supplier/supplier.component';



@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule, CustomersRoutingModule
  ]
})
export class SupplierModule { }
