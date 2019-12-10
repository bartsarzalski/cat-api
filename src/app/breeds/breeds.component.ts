import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../services/breeds.service';

@Component({
  selector: 'breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds: any[];

  constructor(private route: ActivatedRoute, private service: BreedsService) { }

  ngOnInit() {}

    /* this.service.getAll()
      .subscribe(breeds => {
        this.breeds = breeds;
      }) */

      searchBreed(query: string) {
        return this.service.getBreed(query)
          .subscribe(
            breed => this.breeds = breed,
            //cat => console.log(cat),
            error => console.log(error),
            () => console.log("Request completed!")
          )
      }
  }

