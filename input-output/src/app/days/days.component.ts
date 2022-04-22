import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
days = [
  {title:"h"}
]
  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activated.snapshot.paramMap.get('id'))
  }

}
