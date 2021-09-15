type HaveName = {name: string};
type HaveAge = {age: number};
type HaveMoney = {money: boolean};

type People = HaveName & HaveAge & HaveMoney;

const people: People = {
  name: 'John',
  age: 23,
  money: false,
};
