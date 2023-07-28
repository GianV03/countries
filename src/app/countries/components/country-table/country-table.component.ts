import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
    
    .sized-box{
      height:5rem;
    }
    `
  ]
})
export class CountryTableComponent implements OnInit, AfterViewInit, OnChanges{

  @Input() 
  public countries: Country[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { 
  }

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['position', 'flag', 'name', 'capital', 'population'];
  index:number = 0;


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.paginator = this.paginator;
  }

  

}
