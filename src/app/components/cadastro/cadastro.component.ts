import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario-cadastro';
import { CadastroServiceService } from 'src/app/shared/services/cadastro-service/cadastro.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cadastro: CadastroServiceService
  ) { }

  cadastroForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email, Validators.email, Validators.maxLength(35), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
  });

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get sobrenome() {
    return this.cadastroForm.get('sobrenome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  // Envia as informações do usuário para o servico criar conta.
  public cadastrar(info: Usuario): void {
    this.cadastro.criarConta(info);

  }

  // Icone do olho mágico, ao clikar mostra ou oculta a senha na página de cadastro
  public mostrarSenha(): void {
    let input = document.querySelector('#senha');

    if (input!.getAttribute('type') !== 'password') {
      input!.setAttribute('type', 'password');
    } else {
      input!.setAttribute('type', 'text');
    }
  }

  ngOnInit(): void {
    console.log(this.cadastro.getUsuarioAPI())
  }

}
