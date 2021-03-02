import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // Variables
  private baseURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }


  constructor( private http: HttpClient ) { }

  // Methods
  getCountries( valueToSearch: string ): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseURL}/name/${valueToSearch}`, {params: this.httpParams});
  };

  getCountriesByCapital( valueToSearch: string ): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseURL}/capital/${valueToSearch}`, {params: this.httpParams});
  };

  getCountryByCode( countryCode: string ): Observable<CountryResponse> {
    return this.http.get<CountryResponse>(`${this.baseURL}/alpha/${countryCode}`);
  };

  getCountriesByRegion( valueToSearch: string ): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${this.baseURL}/region/${valueToSearch}`, {params: this.httpParams});
  };

}
