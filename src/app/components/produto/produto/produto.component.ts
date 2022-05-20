import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  @Input('dadoProduto') produto!: Produto;
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  constructor() { }

  ngOnDestroy(): void {
  }

  onAddCarrinho() {
    alert("Produto adicionado no carrinho!");
    this.onCarrinho.emit(this.produto);
  }

  ngOnInit(): void {
  }

}