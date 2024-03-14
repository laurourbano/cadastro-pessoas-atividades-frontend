import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cadastro-pessoas-atividades-frontend';

  constructor(private loginService: LoginService, private router: Router) { }

  authenticated = false;

  ngOnInit() {
    this.authenticated = this.loginService.authenticated;
  }

  logout() {
    this.loginService.logout();
    this.authenticated = false;
    this.router.navigate(['/login']);
  }

  login() {
    this.authenticated = this.loginService.authenticated;
  }

}
