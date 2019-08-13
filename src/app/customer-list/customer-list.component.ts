import { Component, OnInit } from '@angular/core';
import{Customer} from '../customer'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[
    {
    name:"yasha",
    birthDate:new Date(1997,7,14)
  },
  {
    name:"ashi",
    birthDate:new Date(1997,7,13)
  },
    {
      name:"parul",
      birthDate:new Date(1997,3,14)
    }]
  constructor() { }

  ngOnInit() {
  }
  addCustomer(customer:Customer)
  {
    let c:Customer=new Customer();
    c.name=customer.name
    c.birthDate=customer.birthDate
    this.customers.push(c)

  }
}
