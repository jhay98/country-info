import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() countries: any;
  @Output() countrySelectedEvent = new EventEmitter<any>();
  imageUrl: string = '';
  displayedColumns: string[] = ['flag', 'name'];
  selection = new SelectionModel<any>(false, []);
  selectedCountry: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCountrySelected(country: any) {
    this.selection.toggle(country)

    if (this.selection.selected.length > 0) {
      this.selectedCountry = this.selection.selected[0];
      this.countrySelectedEvent.emit(this.selectedCountry);
    }
  }

}
