import { Component, OnInit } from '@angular/core';
import { Country, Translation } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  country!: Country |null;
  translations!: Translation[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.service.searchCountryByAlphaCode(id))
    )
    .subscribe(country=>{
      if(!country){
        return this.router.navigateByUrl('');
      }
      this.country = country;
      this.translations = Object.values(country!.translations);
      return;
        }
      )
    }
  }


