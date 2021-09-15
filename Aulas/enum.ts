/* eslint-disable no-shadow */

enum Colors {
  red, // 0
  blue, // 1
  yellow, // 2
}

function selectColor(cor: Colors): void {
  console.log('0 = red \n1 = blue \n2 = yellow');
  console.log(Colors[cor]);
}

selectColor(1);
