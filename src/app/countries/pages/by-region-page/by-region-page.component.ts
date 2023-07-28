import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion: Region = '';
  countries: Country[] = [];
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.service.cacheStore.byRegion.countries;
    this.selectedRegion = this.service.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region){
    this.selectedRegion = region;
    this.service.searchRegion(region).subscribe(
      response=> this.countries = response
    )
  }

}
