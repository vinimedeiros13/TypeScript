// Tipos básicos (inferência de tipos)
let nick: string = 'Vini';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('algum-symbol');
let big: bigint = 10n;

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3, 4];
let arrayNumbers2: number[] = [1, 2, 3, 4];

let arrayStrings: Array<string> = ['v', 'a', 'e', 'r'];
let arrayStrings2: string[] = ['v', 'a', 'e', 'r'];

// Objetos
let people: {name: string; age: number, adult?: boolean} = {
  name: 'Vini',
  age: 15,
};

// Funções
const calc = (x: number, y: number): number => {
  return x + y;
};

const calc2: (x: number, y: number) => number = (x, y) => x + y;
