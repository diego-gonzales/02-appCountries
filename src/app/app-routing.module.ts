import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CountryByCountryComponent } from './country/pages/country-by-country/country-by-country.component';
import { CountryByRegionComponent } from './country/pages/country-by-region/country-by-region.component';
import { CountryByCapitalComponent } from './country/pages/country-by-capital/country-by-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CountryByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: CountryByRegionComponent,
    },
    {
        path: 'capital',
        component: CountryByCapitalComponent
    },
    {
        path: 'country/:code',
        component: ShowCountryComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}