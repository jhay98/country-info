import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  @Input() country: any;

  constructor() { }

  ngOnInit(): void {
  }

}
