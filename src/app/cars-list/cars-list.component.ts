import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars = [];

  constructor(private _carService: CarsService) { }

  ngOnInit() {
    this._carService.getCars()
    .subscribe(data => this.cars = data);
  }

}
