import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[]=[];
  initialValue: string='';
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.service.cacheStore.byCapital.countries;
    this.initialValue = this.service.cacheStore.byCapital.item;
  }

  searchByCapital(item:string){
    this.service.searchCapital(item).subscribe(
      response=>{
        this.countries = response
      }
    )
  }

}
