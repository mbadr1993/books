import { Component } from '@angular/core';
import { BookDetailsService } from './book-details.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  providers: [BookDetailsService],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  book: any;

  constructor(
    private bookDetails: BookDetailsService,
    private route: ActivatedRoute
  ) {
    const bookID = route.snapshot.paramMap.get('id');

    if (bookID) {
      bookDetails.getBookDetails(bookID).subscribe((data: any) => {
        this.book = data;
      });
    }
  }
}
