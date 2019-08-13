import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  template:`<h2>Name of Customer is {{customer.name}}</h2>
  <h3>{{customer.name}}'s birth date is {{customer.birthDate | date:longDate}}`,
  styles: ['h2{color:blue;}','h3{color:magenta}']
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  customer:Customer
  constructor() { }

  ngOnInit() {
  }

}
