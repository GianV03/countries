import { NgModule } from '@angular/core';


import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';


@NgModule({
  exports: [

    MatPaginatorModule,
    MatTableModule
  ]
})
export class MaterialModule { }