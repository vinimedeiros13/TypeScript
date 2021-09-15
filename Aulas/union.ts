function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  return `${a} ${b}`;
}

console.log(addOrConcat(5, 6));
console.log(addOrConcat('Vini', 'Medeiros'));
console.log(addOrConcat(10, 'Medeiros'));
