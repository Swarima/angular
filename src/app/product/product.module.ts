import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from '../product-list/product-list.component';


const productRoute: Routes = [
  {
    path:'product-menu/addProduct',
    component:ProductComponent
  },
  {
    path:'product-menu/viewProduct',
    component:ProductListComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(productRoute)],
  exports:[RouterModule]
})
export class ProductModule { }
