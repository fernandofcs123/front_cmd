import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersList } from '../types/users-list';
import { IUsersResponse } from '../interfaces/users-response/users-response.interfaces';
import { EntradasList } from '../types/entradas-list';
import { IEntradasResponse } from '../interfaces/users-response/entradas-response.interfaces';
import { DiversosList } from '../types/diversos-list';
import { IDiversosResponse } from '../interfaces/users-response/diversos-response.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DiversosService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  listdiversos(): Observable<DiversosList>{
    // const variavel <any> 
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<IDiversosResponse>(`${this.apiUrl}/diversos`,{headers}).pipe(
      map((listusersService)=>{
        const variavel = listusersService.values.values;
        return variavel
      })
    )
  }

}
