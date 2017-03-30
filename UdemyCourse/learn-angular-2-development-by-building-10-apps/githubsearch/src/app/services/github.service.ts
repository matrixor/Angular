import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {RequestOptions} from '@angular/http';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '657f8b77e714f4977c66';
    private client_secret = 'a880ba74eb3955196c76abd014324221fa58699b';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
      this.username = username;
    }
}
