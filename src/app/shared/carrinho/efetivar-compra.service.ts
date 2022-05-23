import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DadosCliente } from 'src/app/models/dados-cliente';
import { URL_API } from 'src/app/url_api';

@Injectable({
  providedIn: 'root'
})
export class EfetivarCompraService {

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: DadosCliente): Observable<number> {
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), {
      headers: headers
    }
    ).pipe(map((reposta: any) => {
      return reposta['id'];
    }));
  }
}
