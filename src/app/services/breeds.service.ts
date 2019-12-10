import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class BreedsService {
  private query: string;
  private API_KEY: string = environment.API_KEY;
  private API_URL: string = environment.API_URL;
  //private PROXY: string = 'https://cors-anywhere.herokuapp.com/';
  private URL: string = this.API_URL + '/search?q=';

  constructor(private http: HttpClient) { }
  
  getBreed(query) {
    const headers = new HttpHeaders({'x-api-key': this.API_KEY});
    return this.http.get<any[]>(this.URL + query, { headers: headers});
  }

}
