import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  // Variables
  country: CountryResponse; // esto por defecto es null, y marca error al iniciar el componente, por eso usamos ngIf en el template

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
        .pipe(
          switchMap( ({code}) => this.countryService.getCountryByCode(code) ),
          tap( console.log ) // esto solo lo usamos para poder mostrar en consola la respuesta
        )
        .subscribe( (response) => {
          this.country = response;
        }, (error) => {
          window.location.href = "/"; // redirigira al inicio en caso de que alguien ponaga una ruta invalida en country/:code
        })

    // Esto es lo mismo que lo anterior, arriba se usa switchMap de rxjs
    // this.activatedRoute.params
    //     .subscribe( ({code}) => {
    //       this.countryService.getCountryByCode(code)
    //           .subscribe( response => {
    //             console.log(response);
    //           })
    //     })
  }

}
