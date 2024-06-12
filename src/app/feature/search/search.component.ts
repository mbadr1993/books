import { Component, Signal, signal } from '@angular/core';
import { SearchService } from './search.service';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { SearchData } from '../../shared/interfaces/search-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private readonly debounceTimeMs = 300;
  options = ['title', 'subject', 'author'];
  searchBehaviarSubject: BehaviorSubject<SearchData> =
    new BehaviorSubject<SearchData>({
      query: '',
      type: this.options[0],
    });
  selectedOption: string = this.options[0];

  constructor(private searchService: SearchService) {}

  getSearchResults({ query, type }: SearchData) {
    console.log(query);

    if (query !== '') {
      this.searchService.search(query, `/${type}`).subscribe((data) => {
        console.log(data);
      });
    }
  }

  changeSelection(selectedItem: string) {
    this.searchBehaviarSubject.next({
      query: this.searchBehaviarSubject.value.query,
      type: selectedItem,
    });
  }
  changeSearchTest(searchText: any) {
    this.searchBehaviarSubject.next({
      query: searchText,
      type: this.searchBehaviarSubject.value.type,
    });
  }

  ngOnInit() {
    this.searchBehaviarSubject
      .pipe(debounceTime(this.debounceTimeMs))
      .subscribe((searchValue) => {
        this.getSearchResults(searchValue);
      });
  }
}
