import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  @Input() book: any;

  getBookID(key: string) {
    return key.replace('/works/', '');
  }
}
