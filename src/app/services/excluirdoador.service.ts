import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { CadUser } from '../interfaces/caduser-response/caduser.interface';

@Injectable({
  providedIn: 'root'
})
export class ExcluirDoadorService {
  
    private readonly _httpClient = inject(HttpClient)
    private apiUrl = environment.apiUrl;
  
  deleteuser(doador: CadUser): Observable<{message: string}>{
    const headers = new HttpHeaders({
      'authorization':`Bearer ${localStorage.getItem('access-token')}`, 
      'Content-Type': 'application/json'
    })

    return this._httpClient.request<{ message: string }>('delete',`${this.apiUrl}/deldoador`, {
      body: doador ,
      headers: headers
  });
      
  }

}
