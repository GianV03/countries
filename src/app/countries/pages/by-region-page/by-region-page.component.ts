import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
  }

  searchByRegion(item: string){
    this.service.searchRegion(item).subscribe(
      response=> this.countries = response
    )
  }

}
