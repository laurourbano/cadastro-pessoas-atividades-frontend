import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { AtividadesService } from '../../../services/atividades.service';
import { Atividade } from '../../../interfaces/atividade';
import { Observable, map } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'AtividadesComponent',
  standalone: true,
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss'],
  imports: [
    RouterModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    DatePipe,
    AsyncPipe,
    JsonPipe,
    NzIconModule,
  ],
})
export class AtividadesComponent implements OnInit {
  atividades = new Observable<Atividade[]>();
  atividade!: Atividade;

  constructor(private atividadesService: AtividadesService) {}
  ngOnInit(): void {
    this.atividades = this.atividadesService.listarAtividades();
    this.atividadesService.buscarUmaAtividade(this.atividade.id).subscribe((atividade: Atividade) => {
      this.atividade = atividade;
    });
  }
  deleteAtividade(id: number) {
    this.atividadesService.deletarAtividade(id);
  }
  editarAtividade(id: number, atividade:Atividade) {
    this.atividadesService.editarAtividade(id, atividade);
  }
}
