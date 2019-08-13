import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'product-menu',
    component:ProductMenuComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'category',
    component:CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
