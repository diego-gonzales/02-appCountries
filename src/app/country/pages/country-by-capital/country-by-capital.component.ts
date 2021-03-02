import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-by-capital',
  templateUrl: './country-by-capital.component.html',
  styles: [
  ]
})
export class CountryByCapitalComponent {
  
  // Variables
  arrayCountries: CountryResponse[] = [];
  arraySuggestions: CountryResponse[] = [];
  showAlert: boolean = false;
  showSugerencias: boolean = false;
  termino: string = '';
  placeholder: string = 'Search by capital...';

  // Constructor
  constructor( private countryService: CountryService ) { }


  // Methods
  search( inputValue: string ) {
    this.termino = inputValue;

    this.showAlert = false;
    this.showSugerencias = false;

    if ( !inputValue || !inputValue.trim() ) { return; };


    this.countryService.getCountriesByCapital(inputValue)
        .subscribe( (response) => {
          // console.log(response);
          this.arrayCountries = response;
        }, (error) => {
          this.showAlert = true;
          this.arrayCountries = [];
        })
  }

  showSuggestions( inputValueDebounce: string ) {
    this.showAlert = false;
    this.showSugerencias = true;

    this.termino = inputValueDebounce;

    this.countryService.getCountriesByCapital( inputValueDebounce )
        .subscribe( (response) => {
          this.arraySuggestions = response.splice(0, 5);
        }, (error) => {
          this.arraySuggestions = [];
        })
  }

}
