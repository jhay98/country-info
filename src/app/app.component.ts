import { Component } from '@angular/core';
import { DataService } from './data/data.service';
import { LoaderService } from './loader/loader.service';
import { ErrorMessageService } from './error-message/error-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-info-app';
  countries: object[] = [];
  selectedCountry: any;
  countryInfo: any;

  constructor(private dataService: DataService, public loaderService: LoaderService, private errorMessageService: ErrorMessageService) { }

  onResultsFound(results: object[]) {
    this.countries = results;
  }

  onCountrySelected(country: any) {
    this.selectedCountry = country;
    this.dataService.detailSearch(this.selectedCountry.name.official).subscribe(
      {
        next: (response: any) => {
          this.countryInfo = response[0];
        },
        error: (error: any) => {
          this.errorMessageService.showErrorMessage('An error occurred: ' + error.message);
        }
      });
  }

}
