function noReturn(...args: string[]): void {
  console.log(args.join());
  console.log(args.join(' '));
  console.log(args.join('-'));
}

noReturn('Vini', 'Medeiros');

const team = {
  name: 'Flamengo',
  titles: 6,
  place: 'Brazil',

  showTeam(): void {
    console.log(`${this.name} ${this.titles} ${this.place}`);
  },
};

team.showTeam();
