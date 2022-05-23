import { CategoriaProduto } from "./produto"

export class Pedido {
  constructor(
    public id: number,
    public imagem: string,
    public nomeDoProduto: string,
    public preco: number,
    public categoria: CategoriaProduto,
    public quantidade: number,
  ) { }
}
