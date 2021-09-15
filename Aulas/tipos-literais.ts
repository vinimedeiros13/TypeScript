let x = 10;
x = 0b1010;
const y = 10;

let a: 100 = 100;
// a = 50; não pode

const people = {
  name: 'Vini' as const,
  age: 18,
};

people.age = 15;

console.log(people.name);
console.log(people.age);

function selectColor(color: 'red' | 'blue' | 'black'): string {
  const result = `Cor escolhida => ${color}`;

  return result;
}

console.log(selectColor('black'));
console.log(selectColor('red'));
