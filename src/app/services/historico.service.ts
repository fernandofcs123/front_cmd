import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { HistoricoList } from '../types/historico-list';
import { IHistoricoResponse } from '../interfaces/users-response/historico-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  listhistorico(): Observable<HistoricoList>{
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<IHistoricoResponse>(`${this.apiUrl}/historico`,{headers}).pipe(
      map((listusersService)=>{
        const variavel = listusersService.values.values;
        return variavel
      })
    )
  }

}
