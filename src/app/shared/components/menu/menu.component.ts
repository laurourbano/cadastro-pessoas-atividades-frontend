import { Component, Input, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginService } from '../../../services/login.service';
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
  @Input() autenticado!: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
