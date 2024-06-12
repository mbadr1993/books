import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishlist = [];

  constructor() {}
  // addToWishlist(bookId: string): void {
  //   if (!this.wishlist.includes(bookId)) {
  //     this.wishlist.push(bookId);
  //   }
  // }

  // removeFromWishlist(bookId: string): void {
  //   this.wishlist = this.wishlist.filter((id) => id !== bookId);
  // }
}
