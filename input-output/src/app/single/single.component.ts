import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
@Input() article:any
@Input() count: number=0;
@Output() countChanged: EventEmitter<number> =   new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
decrement() {
    this.count--;
    this.countChanged.emit(this.count);
}


}
