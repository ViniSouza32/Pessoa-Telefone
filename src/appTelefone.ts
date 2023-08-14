import { Pessoa } from './Pessoa';
import { Endereco } from './Endereco';
import { Telefone, TipoDeTelefone, TiposDeTelefone } from './Telefone';

let pessoa1 = new Pessoa('vini', 'vini@outlook.com', undefined, undefined, 'Mexicano');

pessoa1.adicionarEndereco('Rua a', '1', '95914-014', 'Lajeado', 'Rio Grande do Sul', 'Brasil', undefined);

pessoa1.adicionarTelefone('+5155123456780', TiposDeTelefone.MOVEL);
pessoa1.adicionarTelefone('+5155123456789', TiposDeTelefone.FIXO);

console.log(pessoa1);