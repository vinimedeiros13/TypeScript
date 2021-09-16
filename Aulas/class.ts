class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: number;

  constructor(nome: string, cnpj: number) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores() : void {
    this.colaboradores.map((value) => console.log(value));
  }
}

const empresa1 = new Empresa('Bradesco', 12245);
const colaborador1 = new Colaborador('Razer', 'Medeiros');
const colaborador2 = new Colaborador('Junior', 'Boca');
const colaborador3 = new Colaborador('Pablo', 'Scobar');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

empresa1.mostrarColaboradores();
