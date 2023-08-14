export enum TiposDeTelefone {
  MOVEL = 'Móvel',
  FIXO = 'Fixo',
}

export type TipoDeTelefone = TiposDeTelefone.FIXO | TiposDeTelefone.MOVEL;

export class Telefone {
  
  constructor (
    public numero: string, 
    public tipo: TipoDeTelefone,) {

  }
}