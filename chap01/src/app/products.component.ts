import { Component } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent{
  products;

  constructor(productService: ProductService){
    this.products = productService.getProducts();
  }
}
