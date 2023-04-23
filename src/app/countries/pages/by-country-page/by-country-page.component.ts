import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
  }

  searchByCountry(item: string){
    this.service.searchCountry(item).subscribe
    (country=> this.countries=country)
  }
}
