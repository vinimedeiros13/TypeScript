let arrayNumber: Array<number> = [1, 2, 3, 4];
let arrayNumber2: number[] = [1, 2, 3, 4];

function multiplication(...args: Array<number>): number {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

function concatenate(...args: string[]): string {
  return args.reduce((accumulator, value) => accumulator + value);
}

function toUpperCaseArray(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}

console.log(multiplication(1, 2, 3));

console.log(concatenate('o', 'l', 'a', ' ', 'V', 'i', 'n', 'i'));

console.log(toUpperCaseArray('o', 'l', 'a', ' ', 'V', 'i', 'n', 'i'));
