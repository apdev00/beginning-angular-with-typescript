import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { ProductsService } from './products.service';
import { ProductService } from './product.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(value => {
      console.log(value);
    });
  }

  onClickMe($event){
    console.log('clicked!', $event);
    alert('clicked: ' + $event.srcElement.id);
  }
}
