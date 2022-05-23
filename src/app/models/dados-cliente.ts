export class DadosCliente {
  constructor(
    public nome: string,
    public sobrenome: string,
    public nascimento: string,
    public email: string,
    public cpf: string,
    public sexo: string,
    public cep: string,
    public endereco: string,
    public numero: string,
    public bairro: string,
    public cidade: string,
    public estado: string,
    public complemento: string,
    public telefone: string,
    public celular: string,
    public formaPagamento: string
  ) {}
}
