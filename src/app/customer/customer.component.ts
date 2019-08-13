import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Output()
  customerEmitter =new EventEmitter<Customer>();
cust:Customer;
format:string;
toggle:boolean;

  constructor() {
    this.cust=new Customer();
    this.toggle=false;
   }

  ngOnInit() {
  }
  changeDateFormat()
  {
    this.customerEmitter.emit(this.cust);
    this.toggle=!this.toggle;
    this.format=this.toggle?'mediumDate':'fullDate';
  }
}
