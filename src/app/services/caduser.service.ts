import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadUser } from '../interfaces/caduser-response/caduser.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CaduserService {

  private readonly _httpClient = inject(HttpClient)
  private apiUrl = environment.apiUrl;
  
  create(doador: CadUser): Observable<{ message: string }> {
    const headers = new HttpHeaders({'authorization':`Bearer ${localStorage.getItem('access-token')}`, 'Content-Type': 'application/json'})
    return this._httpClient.post<{ message: string }>(`${this.apiUrl}/novodoador`, doador, {headers})
  }
}

