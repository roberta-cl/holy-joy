import { Injectable } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos: Produto[] = [
    // PULSEIRAS
    {
      imagem: 'assets/img/pulseira1.jpg',
      nomeDoProduto: 'Pulseira Silver',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira2.jpg',
      nomeDoProduto: 'Pulseira Gold',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira3.jpg',
      nomeDoProduto: 'Pulseira Key',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira4.jpg',
      nomeDoProduto: 'Pulseira Hearts',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira5.jpg',
      nomeDoProduto: 'Pulseira Elos',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira6.jpg',
      nomeDoProduto: 'Pulseira Silver Chunky',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira7.jpg',
      nomeDoProduto: 'Pulseira Caramel',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    {
      imagem: 'assets/img/pulseira8.jpg',
      nomeDoProduto: 'Pulseira Pearl',
      preco: 79,
      categoria: CategoriaProduto.PULSEIRAS
    },
    // BRINCOS
    {
      imagem: 'assets/img/brinco1.jpeg',
      nomeDoProduto: 'Brinco Pearl',
      preco: 59,
      categoria: CategoriaProduto.BRINCOS
    },
    {
      imagem: 'assets/img/brinco2.jpeg',
      nomeDoProduto: 'Brinco Star',
      preco: 59,
      categoria: CategoriaProduto.BRINCOS
    },
    {
      imagem: 'assets/img/brinco3.jpeg',
      nomeDoProduto: 'Brinco Starry Night',
      preco: 59,
      categoria: CategoriaProduto.BRINCOS
    },
    {
      imagem: 'assets/img/brinco4.jpeg',
      nomeDoProduto: 'Brinco Drops',
      preco: 59,
      categoria: CategoriaProduto.BRINCOS
    },
    // COLARES
    {
      imagem: 'assets/img/colar1.jpg',
      nomeDoProduto: 'Colar Heart',
      preco: 89,
      categoria: CategoriaProduto.COLARES
    },
    {
      imagem: 'assets/img/colar2.jpg',
      nomeDoProduto: 'Colar Ballet',
      preco: 89,
      categoria: CategoriaProduto.COLARES
    },
    {
      imagem: 'assets/img/colar3.jpg',
      nomeDoProduto: 'Colar Snake',
      preco: 89,
      categoria: CategoriaProduto.COLARES
    },
    {
      imagem: 'assets/img/colar4.jpg',
      nomeDoProduto: 'Colar Gold',
      preco: 89,
      categoria: CategoriaProduto.COLARES
    }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  addProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  constructor() { }
}