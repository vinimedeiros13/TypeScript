type colorRGB = 'red' | 'green' | 'blue';
type colorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type favColor = colorRGB | colorCMYK;

type Age = number;

type People = {
  name: string;
  age: Age;
  salary: number;
  favColor?: favColor;
};

const people: People = {
  name: 'John',
  age: 19,
  salary: 2000,
};

function setColorFav(guy: People, color: favColor): People {
  return { ...guy, favColor: color };
}

console.log(setColorFav(people, 'red'));
