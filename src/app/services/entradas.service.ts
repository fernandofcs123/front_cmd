import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersList } from '../types/users-list';
import { IUsersResponse } from '../interfaces/users-response/users-response.interfaces';
import { EntradasList } from '../types/entradas-list';
import { IEntradasResponse } from '../interfaces/users-response/entradas-response.interfaces';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  listentradas(): Observable<EntradasList>{
    // const variavel <any> 
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<IEntradasResponse>(`${this.apiUrl}/entradas`,{headers}).pipe(
      map((listusersService)=>{
        const variavel = listusersService.values.values;
        return variavel
      })
    )
  }

}
