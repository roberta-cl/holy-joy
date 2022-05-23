import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepApi } from 'src/app/models/cep-api';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient) { }

  public buscar(cep:number): Observable<CepApi> {
    return this.httpCliente.get<CepApi>(`https://viacep.com.br/ws/${cep}/json/`)
     
           
     }
}
