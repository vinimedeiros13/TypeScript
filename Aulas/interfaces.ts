interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Vini', 'Medeiros');

console.log(pessoa);
