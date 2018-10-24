import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "api_key=api_key";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?" + this.apiKey);
  }

}
