import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { GitHubService } from './github/github.service';
//import { ProductsService } from './products.service';
import { ProductService } from './product.service';
//import { OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app3.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, GitHubService]
})
export class AppComponent {

  title: string = 'First Angular App!';
  subTitle = 'another title!';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = true;
  searchControl = new FormControl();
  isLoading = true;
  users = [];

  constructor(private _gitHubService: GitHubService) {

  }


  ngOnInit() {

    this.searchControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(value => {
        this.isLoading = true;
        this._gitHubService.getGitHubData(value)
        .subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
          //console.log(data.items);
        });
      });
  }

  onClickMe($event){
    console.log('clicked!', $event);
    alert('clicked: ' + $event.srcElement.id);
  }
}
