import { Component } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'First Angular App!';
  subTitle = 'another title!';
}
