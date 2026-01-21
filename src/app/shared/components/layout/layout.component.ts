import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { FooterComponent } from '../../../core/layouts/footer/footer.component';
import { HeaderComponent } from '../../../core/layouts/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
