import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atividade } from '../interfaces/atividade';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AtividadesService {
  private readonly API = environment.appConfig.API_URL;
  private id: number = 10;
  constructor(private http: HttpClient) {}

  listarAtividades() {
    return this.http.get<Atividade[]>(`${this.API}/activities/${this.id}/users`)
      .pipe(
        map((response: any) => {
          console.log(response.activities)
          return response.activities;
        })
      );
  }
}
