import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  country?:Country;
  translations?:any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id})=>this.service.searchByCode(id)))
    .subscribe(
      (country)=>{
        if(!country) return this.router.navigateByUrl('');
        this.translations = Object.entries(country.translations);
        console.log(country)
        return this.country = country;
    }
    )
  }

}
