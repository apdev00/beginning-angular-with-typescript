import { Component, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: [`.media {margin-bottom: 20px;}`]
})

export class ProductComponent {
  @Input() data;

  constructor(productService: ProductService){
    this.data = productService.getProducts();
  }
}
