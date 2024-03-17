import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { AtividadesService } from '../../../services/atividades.service';
import { Atividade } from '../../../interfaces/atividade';
import { Observable, map, tap } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
  id!: number;
  atividades:Atividade[] = [];
  atividade!: Atividade;

  constructor(
    private atividadesService: AtividadesService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.atividadesService.listarAtividades(this.id).subscribe((activities) => {
      this.atividades = activities;
    });

    this.atividadesService.buscarUmaAtividade(this.id).subscribe((activity) => {
      this.atividade = activity;
    });

  }

  deletarAtividade(id: number) {
    this.atividadesService.deletarAtividade(id);
  }

  editarAtividade(id: number, atividade: Atividade) {
    this.atividadesService.editarAtividade(id, atividade);
  }

  adicionarAtividade(atividade: Atividade) {
    this.atividadesService.adicionarAtividade(atividade);
  }
}
