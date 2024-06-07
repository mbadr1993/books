import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./feature/book-details/book-details.module').then(
        (m) => m.BookDetailsModule
      ),
  },
  {
    path: 'author/:name',
    loadChildren: () =>
      import('./feature/author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./feature/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'wish-list',
    loadChildren: () =>
      import('./feature/wish-list/wish-list.module').then(
        (m) => m.WishListModule
      ),
  },
];
