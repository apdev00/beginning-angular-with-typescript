import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class GitHubService {
  constructor(private _http: Http) {

  }

  getGitHubData(_searchTerm) {
    return this._http.get('https://api.github.com/search/users?q=' + _searchTerm)
        .map(res => res.json());
  }

}
