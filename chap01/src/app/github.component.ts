import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { Observable } from 'rxjs/Rx';
import { GitHubService } from './github.service';
import { ProductService } from './product.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  providers: [ProductService, GitHubService]
})

export class GitHubComponent {
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
        });
      });
  }
}
