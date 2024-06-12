import { Component } from '@angular/core';
import { CardComponent } from '../../shared/ui-elements/card/card.component';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  constructor(private wishlistService: WishListService) {}
}
