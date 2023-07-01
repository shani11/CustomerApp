import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path:'Home', component:HomeComponent
    },
    {
        path: 'Customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
        path: 'Supplier',
        loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
    },
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    }

];
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }