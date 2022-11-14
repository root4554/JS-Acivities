//Javascript funciones de juegos.

function CrearTablaCartas(N, M) {
  var iPos = 0;
  var aNumeros = new Array(N * M);
  var bRepetido = true;
  var aTablero = [];

  for (let i = 0; i < N; i++) {
    aTablero.push([]);
  }

  for (let i = 0; i < aNumeros.length; i++) {
    var iRandNum = 0;
    bRepetido = true;
    while (bRepetido == true) {
      bRepetido = false;
      let cont = 0;
      iRandNum = Math.floor(Math.random() * (N * M - 1 + 1)) + 1;
      if (iRandNum > (N * M) / 2) iRandNum -= (N * M) / 2;
      for (let i = 0; i < aNumeros.length; i++) {
        if (iRandNum == aNumeros[i]) cont++;
      }
      if (cont > 1) {
        bRepetido = true;
      }
    }
    aNumeros[i] = iRandNum;
  }

  for (let i = 0; i < aTablero.length; i++) {
    for (let j = 0; j < M; j++) {
      aTablero[i].push(aNumeros[iPos]);
      iPos++;
    }
  }
  return aTablero;
}
