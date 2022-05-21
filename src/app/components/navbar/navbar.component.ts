import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from 'src/app/shared/services/cadastro-service/cadastro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cadastro: CadastroServiceService) { }

  public usuario?: string;


  ngOnInit(): void {
    let user = this.cadastro.getUsuario();
    if(typeof(user.nome) === 'string' && user.name !== 'null') {
      this.usuario = user.nome;
    } else {
      this.usuario = 'Log In';
    }

  }

}
