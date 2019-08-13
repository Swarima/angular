import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product
  toggle:boolean
  format:string

  @Output()
  productEmitter =new EventEmitter<Product>();
  constructor(private productService:ProductService) {
    this.product=new Product();
    this.toggle=false;
   }

  ngOnInit() {
  }
  display()
  {
    console.log(this.product)
  }
  add()
  {
    this.productEmitter.emit(this.product);
    this.productService.addProduct(this.product).subscribe();
  }
  update()
  {
    this.productService.updateProduct(this.product).subscribe();
  }
  // delete()
  // {
  //    this.productService.deleteProduct(this.product).subscribe();
  //  }
  add2()
  {
    this.toggle=!this.toggle;
    this.format=this.toggle?'toggl':'';
  }
}
