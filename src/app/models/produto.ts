export interface Produto {
    imagem: string;
    nomeDoProduto: string;
    preco: number;
    categoria: CategoriaProduto;
}

export enum CategoriaProduto {
    ANEIS = 'aneis',
    COLARES = 'colares',
    BRINCOS = 'brincos',
    PULSEIRAS = 'pulseiras',
}