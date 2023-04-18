import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {
  
  @Input() 
  public placeholder: string ='';
  @Output() 
  onValue = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }
  emitValue(item:string){
    this.onValue.emit(item);
  }
}
