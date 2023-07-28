import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
    table{
      width:80%
    }
    img{
      width:30px
    }
    td:hover{
      cursor:pointer
    }
    `
  ]
})
export class CountryTableComponent implements OnInit {

  @Input() 
  public countries: Country[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
