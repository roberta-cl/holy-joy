import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DadosCliente } from 'src/app/models/dados-cliente';
import { Produto } from 'src/app/models/produto';
import { CarrinhoService } from 'src/app/shared/carrinho/carrinho.service';
import { EfetivarCompraService } from 'src/app/shared/carrinho/efetivar-compra.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public itensCarrinho: Produto[] = [];
  idPedidoCompra?: number;

  constructor(
    private fb: FormBuilder,
    public carrinhoService: CarrinhoService,
    private efetivarCompra: EfetivarCompraService
    ) { }

  compraForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    nascimento: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
    cpf: ['', [Validators.required, Validators.pattern("[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[\-][0-9]{2}")]],
    sexo: ['', [Validators.required]],
    cep: ['', [Validators.required, Validators.pattern("[0-9]{5}-[0-9]{3}")]],
    endereco: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    celular: ['', [Validators.required, Validators.maxLength(16)]],
    formaPagamento: ['', [Validators.required]],
  })

  get nome() {
    return this.compraForm.get('nome');
  }
  get sobrenome(): any {
    return this.compraForm.get('sobrenome');
  }
  get nascimento() {
    return this.compraForm.get('nascimento');
  }
  get email() {
    return this.compraForm.get('email');
  }
  get cpf(): any {
    return this.compraForm.get('cpf');
  }
  get sexo() {
    return this.compraForm.get('sexo');
  }
  get cep(): any {
    return this.compraForm.get('cep');
  }
  get endereco() {
    return this.compraForm.get('endereco');
  }
  get numero() {
    return this.compraForm.get('numero');
  }
  get bairro(): any {
    return this.compraForm.get('bairro');
  }
  get cidade() {
    return this.compraForm.get('cidade');
  }
  get estado() {
    return this.compraForm.get('estado');
  }
  get telefone(): any {
    return this.compraForm.get('bairro');
  }
  get celular() {
    return this.compraForm.get('celular');
  }
  get formaPagamento() {
    return this.compraForm.get('formaPagamento');
  }

  public confirmarCompra(): void {
    if(this.compraForm.status === 'INVALID') {
      this.compraForm.get('nome')?.markAllAsTouched();
      this.compraForm.get('sobrenome')?.markAllAsTouched();
      this.compraForm.get('nascimento')?.markAllAsTouched();
      this.compraForm.get('email')?.markAllAsTouched();
      this.compraForm.get('cpf')?.markAllAsTouched();
      this.compraForm.get('sexo')?.markAllAsTouched();
      this.compraForm.get('cep')?.markAllAsTouched();
      this.compraForm.get('endereco')?.markAllAsTouched();
      this.compraForm.get('numero')?.markAllAsTouched();
      this.compraForm.get('bairro')?.markAllAsTouched();
      this.compraForm.get('cidade')?.markAllAsTouched();
      this.compraForm.get('estado')?.markAllAsTouched();
      this.compraForm.get('celular')?.markAllAsTouched();
      this.compraForm.get('formaPagamento')?.markAllAsTouched();
    }
    else {
      if(this.carrinhoService.exibirItens().length === 0) {
        Swal.fire('Você ainda não selecionou nenhuma compra!')
      } else {
        let dados: DadosCliente = new DadosCliente(
          this.compraForm.value.nome,
          this.compraForm.value.sobrenome,
          this.compraForm.value.nascimento,
          this.compraForm.value.email,
          this.compraForm.value.cpf,
          this.compraForm.value.sexo,
          this.compraForm.value.cep,
          this.compraForm.value.endereco,
          this.compraForm.value.numero,
          this.compraForm.value.bairro,
          this.compraForm.value.cidade,
          this.compraForm.value.estado,
          this.compraForm.value.complemento,
          this.compraForm.value.telefone,
          this.compraForm.value.ceulular,
          this.compraForm.value.formaPagamento
        )
        this.efetivarCompra.efetivarCompra(dados)
        .subscribe((idPedido: number) => {
          this.idPedidoCompra = idPedido;
          this.carrinhoService.limparCarrinho();
        })
      }
    }
  }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public adicionar(item: Produto): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: Produto): void {
    this.carrinhoService.diminuirQuantidade(item);
  }
}
