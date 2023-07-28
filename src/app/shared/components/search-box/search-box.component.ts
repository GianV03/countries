import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debounceSubscription: Subscription = new Subscription();
  private debouncer: Subject<string> = new Subject<string>();
  @Input()  
  public placeholder: string ='';
  @Input() initialValue: string='';
  @Output() 
  onValue = new EventEmitter<string>();
  @Output() onDebouncer = new EventEmitter<string>();
  

  constructor(

  ) { }

  ngOnInit(): void {
    
    this.debounceSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(
      res=>{
        this.onDebouncer.emit(res);
      }
    )
  }

  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }


  emitValue(item:string){
    this.onValue.emit(item);
  }
  onKeypress(item: string){
    this.debouncer.next(item);
  }
}
