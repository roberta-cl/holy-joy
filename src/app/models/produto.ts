export class Produto {
  public id!: number;
  public imagem!: string;
  public nomeDoProduto!: string;
  public preco!: number;
  public categoria!: CategoriaProduto;
  public quantidade!: number
}

export enum CategoriaProduto {
  ANEIS = 'aneis',
  COLARES = 'colares',
  BRINCOS = 'brincos',
  PULSEIRAS = 'pulseiras',
}
