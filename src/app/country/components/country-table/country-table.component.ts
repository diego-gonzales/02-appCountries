import { Component, Input, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent implements OnInit {

  @Input('arrayCountriesChild') countries: CountryResponse[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
