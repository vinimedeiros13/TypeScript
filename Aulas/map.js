const array = [1, 5, 6, 7, 8, 9];

const arrayMap = array.map((value, indice, arrayy) => {
  console.log(value * 2);
  console.log(indice);
  console.log(arrayy);

  return value;
});

console.log(arrayMap);

const time = {
  nome: 'Flamengo',
  sigla: 'FLA',

  jogadores: {
    base: 11,
    titulares: 10,
  },

  estadio: {
    arquibancada: {
      cadeiras: 55,
      valor: 100,
    },

    camarote: {
      cadeiras: 85,
      valor: 200,
    },
  },
};
