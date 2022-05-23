import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  public itens: Pedido[] = [];

  public exibirItens(): Produto[] {
    return this.itens

  }

  public incluirItem(produto: Produto): void {
    let itemCarrinho: Pedido = new Pedido(
      produto.id,
      produto.imagem,
      produto.nomeDoProduto,
      produto.preco,
      produto.categoria,
      1
    )
    let itemCarrinhoEncontrado = this.itens.find((item: Produto) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
    else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinho(): number {
    let total: number = 0;
    this.itens.map((item: Produto) => {
      total += item.preco * item.quantidade;
    })
    return total;
  }

  public totalItensCarrinho(): number {
    let total: number = 0;
    this.itens.forEach((item: Produto) => {
      item.id;
      total++;
    })
    return total;
  }

  public adicionarQuantidade(itemCarrinho: Produto): void {

    let itemCarrinhoEncontrado = this.itens.find((item: Pedido) => item.id == itemCarrinho.id)

    if(itemCarrinhoEncontrado) itemCarrinhoEncontrado.quantidade += 1;
  }

  // Uma mágia feita ás 00:50 da madruga
  public diminuirQuantidade(itemCarrinho: Produto): void {

    let itemCarrinhoEncontrado = this.itens.find((item: Pedido) => item.id == itemCarrinho.id)
    let itemIndex = this.itens.indexOf(itemCarrinhoEncontrado!);


    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado?.quantidade == 0) {
        this.itens.map((item) => item.id === itemCarrinhoEncontrado?.id);
          this.itens.splice(itemIndex, 1);

      }
    }
  }

  public limparCarrinho(): void  {
    this.itens = [] = [];
  }


}
