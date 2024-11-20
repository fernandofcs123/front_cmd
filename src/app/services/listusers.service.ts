import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersList } from '../types/users-list';
import { IUsersResponse } from '../interfaces/users-response/users-response.interfaces';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ListusersService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  listusers(): Observable<UsersList>{
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('access-token'))
    return this._httpClient.get<IUsersResponse>(`${this.apiUrl}/doadores`,{headers}).pipe(
      map((listusersService)=>{
        return listusersService.values
      })
    )
  }

}
