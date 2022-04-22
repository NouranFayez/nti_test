import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.component.html',
  styleUrls: ['./first-day.component.css']
})
export class FirstDayComponent implements OnInit {
id:any
data:any
  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activated.snapshot.paramMap.get('id'))
    this.data = this.activated.snapshot.queryParamMap
    console.log(this.data.params)
    
    // this.id = this.activated.snapshot.params.id

  }

}
