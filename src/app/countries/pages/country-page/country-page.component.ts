import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  country:any ='';
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id})=>this.service.searchByCode(id)))
    .subscribe(
      (country)=>{
        console.log(country);
      }
    )
  }

}
