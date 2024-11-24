import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
// import { * } from 'dotenv'.
// import { enviroment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient)
  private apiUrl = environment.apiUrl;
  
  login(email: string, senha: string):Observable<{token: string}>{
      return this._httpClient.post<{token: string}>(`${this.apiUrl}/login`, { email, senha}).pipe(
        map(resp =>{
          localStorage.setItem('access-token', resp.token)
          return resp
        })
      )
  }
}
