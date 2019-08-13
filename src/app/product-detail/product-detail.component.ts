import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  template: `<h2>Product is{{product.name}}</h2>
  <h3>Product brand is{{product.brand}}</h3>
  <h2>Product price is{{product.price}}`,
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product:Product;
  constructor() { }

  ngOnInit() {
  }

}
