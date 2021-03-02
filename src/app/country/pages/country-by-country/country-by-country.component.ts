import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-by-country',
  templateUrl: './country-by-country.component.html',
  styles: [
  ]
})
export class CountryByCountryComponent {

  // variables
  arrayCountries: CountryResponse[] = [];
  arraySuggestions: CountryResponse[] = [];
  showAlert: boolean = false;
  showSugerencias: boolean = false;
  termino: string = '';
  placeholder: string = 'Search by country...';

  // Constructor
  constructor( private countryService: CountryService ) { }


  // Methods
  search( inputValue: string ) {

    this.termino = inputValue;

    this.showAlert = false;
    this.showSugerencias = false;

    if ( !inputValue || !inputValue.trim() ) { return; };

    this.countryService.getCountries(inputValue)
        .subscribe( (response) => {
          // console.log(response);
          this.arrayCountries = response;
        }, (error) => {
          this.showAlert = true;
          this.arrayCountries = [];
        })
  };


  showSuggestions( inputValueDebounce: string ) {
    this.showAlert = false;
    this.showSugerencias = true;

    this.termino = inputValueDebounce;
    
    this.countryService.getCountries( inputValueDebounce )
        .subscribe( (response) => {
          this.arraySuggestions = response.splice(0, 5);
        }, (error) => {
          this.arraySuggestions = [];
        })
  }
}
