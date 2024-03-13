import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NzMenuModule,
    RouterModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  authenticated = false;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
    this.authenticated = false;
  }
}
