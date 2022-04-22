import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
all:any[]=[
  {title:"a"},
  {title:"b"},
  {title:"c"},
  {title:"d"},
]
ClickCounter:any
  constructor() { }

  ngOnInit(): void {
  }
  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }


}
