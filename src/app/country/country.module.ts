import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CountryByCapitalComponent } from './pages/country-by-capital/country-by-capital.component';
import { CountryByCountryComponent } from './pages/country-by-country/country-by-country.component';
import { CountryByRegionComponent } from './pages/country-by-region/country-by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { InputComponent } from './components/input/input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    CountryByCapitalComponent,
    CountryByCountryComponent,
    CountryByRegionComponent,
    ShowCountryComponent,
    CountryTableComponent,
    InputComponent,
    SpinnerComponent
  ],
  exports: [
    CountryByCapitalComponent,
    CountryByCountryComponent,
    CountryByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CountryModule { }
