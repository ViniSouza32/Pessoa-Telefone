import { Endereco } from "./Endereco";
import { Telefone, TipoDeTelefone, TiposDeTelefone } from "./Telefone";

let ultimoIdPessoa = 1;

export class Pessoa {
  private readonly _id: number;
  private _endereco: Endereco | undefined = undefined;
  private _telefones: Telefone[] = [];
  
  constructor (
    public nome: string, 
      public email: string, 
      public cpf?: string, 
      public rg?: string,
      public nacionalidade: string = 'Brasileiro',
  ) {
    this._id = ultimoIdPessoa++;
  }

  get id (): number {
    return this.id;
  }

  set endereco (endereco: Endereco) {
    this._endereco = endereco;
  }

  get endereco (): Endereco | undefined {
    return this._endereco
  }

  get telefones (): Telefone[] {
    return this._telefones;
  }

  adicionarEndereco(logradouro: string, numero: string, cep: string, cidade: string, estado: string, pais: string, complemento?: string,) : void {
    
    this._endereco = new Endereco(logradouro, numero, cep, cidade, pais, complemento);
  }

  adicionarTelefone (numero: string, tipo: TipoDeTelefone): void {

    this._telefones.push(new Telefone (numero, tipo));
  }
}