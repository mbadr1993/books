import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  dropdwonIsOpened: boolean = false;
  @Input({ alias: 'options' }) filerOptions: any;
  @Output() changeSelection: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeSearchTest: EventEmitter<string> = new EventEmitter<string>();

  toggleDropdown() {
    this.dropdwonIsOpened = !this.dropdwonIsOpened;
  }

  changeSelectionHandler(option: string) {
    this.changeSelection.emit(option);
    this.toggleDropdown();
  }

  setSearchString(searchText: string) {
    this.changeSearchTest.emit(searchText);
  }
}
