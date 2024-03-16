import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from '../atividades/atividades.component'; // Import the missing component with the correct file path

const routes: Routes = [{ path: '', component: AtividadesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadesRoutingModule {}
