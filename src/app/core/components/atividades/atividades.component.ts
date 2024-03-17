import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { AtividadesService } from '../../../services/atividades.service';
import { Atividade } from '../../../interfaces/atividade';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'AtividadesComponent',
  standalone: true,
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss'],
  imports: [
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
  constructor(private atividadesService: AtividadesService) {}
  ngOnInit(): void {
    this.atividades = this.atividadesService.listarAtividades();
  }
}
