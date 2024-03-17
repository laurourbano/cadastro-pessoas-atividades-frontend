import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atividade } from '../interfaces/atividade';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AtividadesService {
  private readonly API = environment.appConfig.API_URL;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  listarAtividades(id:number): Observable<Atividade[]> {
    return this.http
      .get<Atividade[]>(`${this.API}/activities/user/${id}`);
  }

  buscarUmaAtividade(id: number) {
    return this.http.get<Atividade>(`${this.API}/activities/${id}`);
  }

  deletarAtividade(id: number) {
    return this.http.delete(`${this.API}/activities/${id}`);
  }

  editarAtividade(id: number, atividade: Atividade) {
    return this.http.put<Atividade>(`${this.API}/activities/${id}`, atividade);
  }

  adicionarAtividade(atividade: Atividade) {
    return this.http.post<Atividade>(`${this.API}/activities`, atividade);
  }
}
