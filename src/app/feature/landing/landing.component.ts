import { Component } from '@angular/core';
import { LandingService } from './landing.service';
import { CardComponent } from '../../shared/ui-elements/card/card.component';
import { BookItemComponent } from './book-item/book-item.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardComponent, BookItemComponent],
  providers: [LandingService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  books: any[] = [];

  constructor(private landingService: LandingService) {
    landingService.getBooksBySubject('finance').subscribe((data: any) => {
      this.books = data.works.slice(0, 9);
    });
  }
}
