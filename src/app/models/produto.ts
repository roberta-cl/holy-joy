export class Produto {
    id!: number;
    imagem!: string;
    nomeDoProduto!: string;
    emDestaque!: boolean;
    preco!: number;
    categoria!: CategoriaProduto;
}

export enum CategoriaProduto {
    ANEIS = 'aneis',
    COLARES = 'colares',
    BRINCOS = 'brincos',
    PULSEIRAS = 'pulseiras',
}
