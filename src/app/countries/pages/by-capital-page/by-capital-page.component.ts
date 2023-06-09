import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[]=[];
  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
  }

  searchByCapital(item:string){
    this.service.searchCapital(item).subscribe(
      response=>{
        this.countries = response
        console.log(response);
      }
    )
  }

}
