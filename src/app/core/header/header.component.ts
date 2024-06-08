import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { skip } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
    router.events.pipe(skip(1)).subscribe((val) => {
      this.isMenuOpen = false;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
