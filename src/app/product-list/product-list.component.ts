import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService:ProductService) {
   }

  ngOnInit() {
    this.products.push(new Product())
    this.showProducts();
  }
  addProduct(product:Product)
  {
    let p:Product=new Product();
    p.productid=product.productid
    p.name=product.name
    p.brand=product.brand
    p.price=product.price
    this.products.push(p)

  }

  showProducts()
  {
    this.productService.getAllProducts().subscribe(data=>this.products=data);
  }
}
