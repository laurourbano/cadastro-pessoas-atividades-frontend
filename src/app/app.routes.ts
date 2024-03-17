import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./core/components/cadastro/cadastro.module').then(
        (m) => m.CadastroModule,
      ),
  },
  {
    path: 'atividades/:id',
    loadChildren: () =>
      import('./core/components/atividades/atividades.module').then(
        (m) => m.AtividadesModule,
      ),
  },
  {
    path: 'editar/:id',
    loadChildren: () =>
      import('./shared/components/editar/editar.module').then(
        (m) => m.EditarModule,
      ),
  },
  {
    path: 'adicionar',
    loadChildren: () =>
      import('./shared/components/adicionar/adicionar.module').then(
        (m) => m.AdicionarModule,
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
