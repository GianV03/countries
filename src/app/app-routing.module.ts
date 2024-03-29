import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

const routes: Routes =[
    // {

    {
        path:'by/:id',
        component:CountryPageComponent
    },
    {
        path:'countries',
        loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path:'**',
        redirectTo:'countries'
    }

]
@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule { }
