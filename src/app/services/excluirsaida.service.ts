import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { AltDoacao } from '../interfaces/caduser-response/altdoacao.interface';

@Injectable({
  providedIn: 'root'
})
export class ExcluirSaidaService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
    deleteSaida(doador: AltDoacao): Observable<{message: string}>{
    const headers = new HttpHeaders({
      'authorization':`Bearer ${localStorage.getItem('access-token')}`, 
      'Content-Type': 'application/json'
    })

    return this._httpClient.request<{ message: string }>('delete',`${this.apiUrl}/delsaida`, {
      body: doador ,
      headers: headers
  });
      
  }

}