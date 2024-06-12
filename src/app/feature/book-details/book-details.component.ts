import { Component } from '@angular/core';
import { BookDetailsService } from './book-details.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  providers: [BookDetailsService],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  book: Book | undefined;

  constructor(
    private bookDetails: BookDetailsService,
    private route: ActivatedRoute
  ) {
    const bookID = route.snapshot.paramMap.get('id');

    if (bookID) {
      forkJoin([
        this.bookDetails.getBookDetails(bookID),
        this.bookDetails.getBookbagesNumber(bookID.slice(0, -1) + 'M'),
      ]).subscribe(([book, book1]) => {
        this.book = {
          key: bookID,
          title: book.title,
          year: new Date(book.created.value),
          authors: [],
          imageUrl: book.covers
            ? 'http://covers.openlibrary.org/b/id/' + book.covers[0] + '-L.jpg'
            : 'assets/placeholder.jpg',
          editionCount: book.revision,
          numberOfPages: book1.number_of_pages,
        };
      });
    }
  }
}
