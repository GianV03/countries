import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  initialValue: string = '';
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.service.cacheStore.byCountry.countries;
    this.initialValue = this.service.cacheStore.byCountry.item;
  }

  searchByCountry(item: string){
    this.service.searchCountry(item).subscribe
    (country=> this.countries=country)
  }
}
