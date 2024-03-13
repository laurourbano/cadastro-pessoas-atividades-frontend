import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { CadastroComponent } from './core/components/cadastro/cadastro.component';
import { AtividadesComponent } from './core/components/atividades/atividades.component';
import { authGuard } from './core/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'cadastro', canActivate: [authGuard], component: CadastroComponent },
  {
    path: 'atividades',
    canActivate: [authGuard],
    component: AtividadesComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
