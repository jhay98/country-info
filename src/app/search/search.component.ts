import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data/data.service';
import { EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessageService } from '../error-message/error-message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  @Output() resultsFoundEvent = new EventEmitter<any>();

  constructor(private dataService: DataService, private errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.dataService.nameSearch(this.searchTerm).subscribe(
      { 
        next: (response: any) => {
        this.resultsFoundEvent.emit(response);
        },
        error: (error: any) => {
          if (error instanceof HttpErrorResponse && error.status === 404) {
            this.errorMessageService.showErrorMessage('No results found for search term: ' + this.searchTerm);
          } else {
            this.errorMessageService.showErrorMessage('Error occurred during search: ' + error.message);
          }
        }
      });
  }
  

}
