import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersList } from '../types/users-list';
import { IUsersResponse } from '../interfaces/users-response/users-response.interfaces';
import { EntradasList } from '../types/entradas-list';
import { IEntradasResponse } from '../interfaces/users-response/entradas-response.interfaces';
import { SaidasList } from '../types/saidas-list';
import { ISaidasResponse } from '../interfaces/users-response/saidas-response.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SaidasService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  listsaidas(): Observable<SaidasList>{
    // const variavel <any> 
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<ISaidasResponse>(`${this.apiUrl}/saidas`,{headers}).pipe(
      map((listusersService)=>{
        const variavel = listusersService.values.values;
        return variavel
      })
    )
  }

}
