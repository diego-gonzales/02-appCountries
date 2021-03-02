import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-by-region',
  templateUrl: './country-by-region.component.html',
  styles: [
  ]
})
export class CountryByRegionComponent {
  // Variables
  arrayCountries: CountryResponse[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor(private countryService: CountryService) { }

  // Methods
  activateRegion( region: string ): void {
    
    // esta condicion ayuda a que ya no se vuelva a ejecutar la consulta a la API
    if (region === this.activeRegion) { return };

    this.activeRegion = region;
    this.arrayCountries = []; // vacio el array antes de hacer la consulta para que se optimicen un poco

    this.countryService.getCountriesByRegion(region)
        .subscribe( (response) => {
          console.log(response);
          this.arrayCountries = response;
        }, (error) => {
          this.arrayCountries = [];
        })
  }

  getClassButton( region: string ): string {
    return (region === this.activeRegion) ? 'btn-primary' : 'btn-outline-primary';
  }



}
