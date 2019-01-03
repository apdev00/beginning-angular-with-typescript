import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  providers: [ProductService]
})
export class ProductsComponent{
  products;

  constructor(productService: ProductService){
    this.products = productService.getProducts();
  }
}
