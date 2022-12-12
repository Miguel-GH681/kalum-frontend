import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {

  endpoint = environment.baseUrl;


  constructor(private httpClient : HttpClient) {}

  getCarrerasTecnicas(page: number) : Observable<Array<any>>{
    return this.httpClient.get<any[]>(this.endpoint + '/carrerasTecnicas/page/' + page)
  }
}
