import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { HttpClient} from '@angular/common/http';
import { URL_API } from 'src/app/url_api';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${URL_API}/produtos?emDestaque=true`)
    .pipe(
      retry(10),
      map((response: Produto[]) => {
        return response;
      })
      )
  }
}
