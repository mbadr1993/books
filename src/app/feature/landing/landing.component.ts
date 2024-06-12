import { Component } from '@angular/core';
import { LandingService } from './landing.service';
import { CardComponent } from '../../shared/ui-elements/card/card.component';
import { BookItemComponent } from './book-item/book-item.component';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardComponent, BookItemComponent],
  providers: [LandingService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  books: Book[] = [];

  constructor(private landingService: LandingService) {
    landingService.getBooksBySubject('finance').subscribe((data: any) => {
      data.works.slice(0, 9).map((book: any) => {
        this.books.push({
          key: book.key,
          title: book.title,
          year: new Date(book.first_publish_year),
          authors: [...book.authors],
          imageUrl: book.cover_id
            ? 'http://covers.openlibrary.org/b/id/' + book.cover_id + '-L.jpg'
            : 'assets/placeholder.jpg',
        });
      });
    });
  }
}
