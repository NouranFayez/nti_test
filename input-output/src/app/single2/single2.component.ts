import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single2',
  templateUrl: './single2.component.html',
  styleUrls: ['./single2.component.css']
})
export class Single2Component implements OnInit {
  data : number = 9
  constructor() { }

  ngOnInit(): void {
  }
  getFullName(){
    return "nouran Fayez"
  }

}
