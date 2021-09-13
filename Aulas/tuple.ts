const clientData1: readonly [number, string] = [1, 'Vini'];
const clientData2: [number, string, string] = [1, 'Vini', 'Medeiros'];
const clientData3: [number, string, string?] = [1, 'Vini'];
const clientData4: [number, string, ...string[]] = [1, 'Vini', 'Brazil', 'Hello'];

clientData2[0] = 50;
clientData3[1] = 'Cristiano';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);
