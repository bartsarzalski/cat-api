import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
cats: any[];

  /* constructor(http: Http) {
    http.get(`https://api.thecatapi.com/v1/breeds/`)
      .subscribe(response => {
        this.cats = response.json();
        console.log(this.cats);
      })
  } */



}
