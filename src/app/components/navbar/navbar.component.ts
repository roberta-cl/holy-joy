import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from 'src/app/shared/services/cadastro-service/cadastro.service';
import { CarrinhoService } from 'src/app/shared/carrinho/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cadastro: CadastroServiceService,
    public carrinhoService: CarrinhoService) { }

  public usuario?: string;

  ngOnInit(): void {

    /* Se o retorno do service é o nome do usuário, remove o botão de cadastro
    e coloca o nome do usuário no login do navbar */
    let user = this.cadastro.getUsuario();
    if (typeof (user.nome) === 'string' && user.name !== 'null') {
      this.usuario = user.nome;

      let ulCadastro = document.querySelector('#ulCadastro');
      document.querySelector('#navbarSupportedContent')?.removeChild(ulCadastro!);
      document.querySelector('.text-cart')?.classList.add('alternativeIcon');
    }
    else {
      this.usuario = 'Log In';
      document.querySelector('.text-cart')?.classList.add('alterativePosition');
    }
  }
}
