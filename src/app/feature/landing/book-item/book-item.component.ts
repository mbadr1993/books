import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../shared/interfaces/book';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  @Input({ required: true }) book: Book;

  getBookID(key: string) {
    return key.replace('/works/', '');
  }
  getAuthorID(key: string) {
    return key.replace('/authors/', '');
  }
}
