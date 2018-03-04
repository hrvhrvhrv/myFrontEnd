import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-we-are',
  templateUrl: './where-we-are.component.html',
  styleUrls: ['./where-we-are.component.css']
})
export class WhereWeAreComponent implements OnInit {

  lat: number = 55.863088;
  lng: number = -4.244154;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
