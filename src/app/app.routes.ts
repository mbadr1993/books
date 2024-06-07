import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/landing/landing.module').then((m) => m.LandingModule),
  },
];
