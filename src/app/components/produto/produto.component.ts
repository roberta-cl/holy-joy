import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { CarrinhoService } from 'src/app/shared/carrinho/carrinho.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  @Input('dadoProduto') produto!: Produto;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnDestroy(): void {

  }
  addCarrinho(produto: Produto) {
    this.carrinhoService.incluirItem(produto);
  }

  ngOnInit(): void {

  }

}
