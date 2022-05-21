import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario-cadastro';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/url_api';
import { cadastroSuccess } from '../../sweet-alert/sweetalert';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private http: HttpClient) { }

  public criarConta(user: Usuario): void {

    // Cadastra um novo usuário na API REST Fake
    this.http.post(`${URL_API}/usuarios`, {
      id: user.id! += 1,
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      senha: user.senha
    }).subscribe((resposta: any) => {
      console.log(resposta);
    })

    // Guarda as informações do usuário na LocalStorage do navegador
    localStorage.setItem('usuario', JSON.stringify({id: user.id, nome: user.nome, sobrenome: user.sobrenome, email: user.email}));

    // Chama sweetalert, com mesagem cadastrado com sucesso
    cadastroSuccess();

   setTimeout(() => {
    location.href = '/';
   }, 2000)
  }

  // Função de deslogar usuário apagando do localStorage
  public deslogar(): void {
    localStorage.removeItem('user');
  }

  // Verifica se o usuário está salvo no localStorage e retorna as info dos usuário.
  public getUsuario(): any {
    let usuario = JSON.parse(localStorage.getItem('usuario')!);
    if(usuario !== null) {
      return usuario;
    } else {
      return "error";
    }
  }
}
