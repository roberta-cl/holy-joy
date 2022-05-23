import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CadastroServiceService } from 'src/app/shared/services/cadastro-service/cadastro.service';
import { loginSuccess } from 'src/app/shared/sweet-alert/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private cadastroService: CadastroServiceService) { }

  idLogin: string[] = [];
  nomeUser: string[] = [];
  sobrenomeUser: string[] = [];
  emailLogin: string[] = [];
  senhaLogin: string[] = [];
  indexUser!: number;


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.email, Validators.maxLength(35), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
  });

  get email() {
    return this.loginForm.get('email')
  }
  get senha() {
    return this.loginForm.get('senha')
  }


  public mostrarSenha(): void {
    let input = document.querySelector('#senha');

    if (input!.getAttribute('type') !== 'password') {
      input!.setAttribute('type', 'password');
    } else {
      input!.setAttribute('type', 'text');
    }
  }



  ngOnInit(): any {
    this.cadastroService.getUsuarioAPI().subscribe(usuarios => {
      usuarios.forEach((parametro: any) => {
        this.idLogin.push(parametro.id);
        this.nomeUser.push(parametro.nome);
        this.sobrenomeUser.push(parametro.sobrenome);
        this.emailLogin.push(parametro.email);
        this.senhaLogin.push(parametro.senha);
        console.log("API retornou isso", this.emailLogin, this.senhaLogin, this.idLogin);
      });
    });
    console.log("retornou isso", this.idLogin);
  }

  fazerLogin() {
    this.verificaEmail()

  }

  verificaEmail() {
    if (this.emailLogin.includes(this.email?.value)) {
      this.vericaSenha()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email Inválido',
        footer: '<a href="/cadastro">Cadastre-se</a>'
      })
    }


  }
  vericaSenha() {
    if (this.senhaLogin.includes(this.senha?.value)) {
      this.verificaIndex()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'senha Inválida',
        footer: '<a href="/cadastro">Cadastre-se</a>'
      })
    }
  }
  verificaIndex() {
    if (this.emailLogin.indexOf(this.email?.value) === this.senhaLogin.indexOf(this.senha?.value)) {
      loginSuccess();
      // this.cadastroService.setUser(this.idLogin[this.indexUser], this.nomeUser[this.indexUser],
      //   this.sobrenomeUser[this.indexUser], this.emailLogin[this.indexUser])
        console.log( this.cadastroService.setUser(this.idLogin[this.indexUser], this.nomeUser[this.indexUser],
          this.sobrenomeUser[this.indexUser], this.emailLogin[this.indexUser]));
          console.log(this.idLogin[1], this.nomeUser[1],
            this.sobrenomeUser[1], this.emailLogin[1]);
            console.log("API depois retornou isso", this.emailLogin, this.senhaLogin, this.idLogin);
      setTimeout(() => {
        location.href = '#';
      }, 2000)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email ou senha Inválidos',
        footer: '<a routerlink="/cadastro">Cadastre-se</a>'
      })
    }
  }
  pegaIndex(email: string) {
    this.indexUser = this.emailLogin.indexOf(email)

  }
}



