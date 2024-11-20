import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadUser } from '../interfaces/caduser-response/caduser.interface';
import { environment } from '../../environments/environments';
import { CadDoacao } from '../interfaces/caduser-response/caddoacao.interface';
import { AltDoacao } from '../interfaces/caduser-response/altdoacao.interface';

@Injectable({
  providedIn: 'root'
})
export class AltDoacaoService {

  private readonly _httpClient = inject(HttpClient)
  private apiUrl = environment.apiUrl;
  
  alterar(doador: AltDoacao): Observable<{ message: string }> {
    const headers = new HttpHeaders({'authorization':`Bearer ${localStorage.getItem('access-token')}`, 'Content-Type': 'application/json'})
    return this._httpClient.put<{ message: string }>(`${this.apiUrl}/altentrada`, doador, {headers})
  }
}
