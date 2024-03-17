import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from '../editar/editar.component'; // Import the missing component with the correct file path

const routes: Routes = [{ path: '', component: EditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarRoutingModule {}
