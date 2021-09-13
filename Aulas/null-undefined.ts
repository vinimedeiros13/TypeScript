let x;
if (typeof x === 'undefined') x = 80;

console.log(x * 2);

function createPerson(firstName: string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

function squareOf(z: any) {
  if (typeof z === 'number') return z * z;

  return null;
}

const squareOfTwo = squareOf(2);
const squareOfThree = squareOf('3');

if (squareOfTwo === null) {
  console.log('Is null');
} else {
  console.log(squareOfTwo);
}
