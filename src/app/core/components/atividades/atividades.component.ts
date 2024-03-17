import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { AtividadesService } from '../../../services/atividades.service';
import { Atividade } from '../../../interfaces/atividade';
import { Observable, map, tap } from 'rxjs';
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
  id: number = 10;
  atividades = new Observable<Atividade[]>();
  atividade!: Atividade;

  constructor(private atividadesService: AtividadesService) {}
  ngOnInit(): void {
    this.atividades = this.atividadesService.listarAtividades().pipe(
      map((response: any) => {
        return response;
      }),
    );

    this.atividadesService
      .buscarUmaAtividade(this.id)
      .subscribe((response: any) => {
        this.atividade = {
          id: response.id,
          name: response.name,
          description: response.description,
          start_date: response.start_date,
          end_date: response.end_date,
        } as Atividade;
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
