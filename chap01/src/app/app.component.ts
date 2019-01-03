import { Component } from '@angular/core';
//import { ProductsService } from './products.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'First Angular App!';
  subTitle = 'another title!';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = true;
  onClickMe($event){
    console.log('clicked!', $event);
    alert('clicked: ' + $event.srcElement.id);
  }
}
