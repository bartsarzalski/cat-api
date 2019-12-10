import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  /* getAll() {
    return this.http.get(this.url)
      .pipe(map(response => response));
  } */

    getAll() {
      return this.http.get<any[]>(this.url)
    }
}
