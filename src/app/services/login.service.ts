import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = environment.appConfig.API_URL;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post<any>(`${this.API}/login`, {
      email,
      password,
    });
  }

  logout() {
    return this.httpClient.get(`${this.API}/logout`);
  }

  register(
    name: string,
    telefone: string,
    email: string,
    endereco: string,
    password: string,
  ) {
    return this.httpClient.post<any>(`${this.API}/api/users`, {
      name,
      telefone,
      email,
      endereco,
      password,
    });
  }
}
