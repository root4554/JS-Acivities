//Javascript funciones de juegos.

function CrearTabla(N) {
  //Creamos la tabla de 2 dimensiones de N*N
  var f0, c0;
  var aTabla = new Array(N);
  for (f = 0; f < N; f++) {
    aTabla[f] = new Array(N);
  }
  for (f = 0; f < N; f++) {
    for (c = 0; c < N; c++) {
      bRepe = true;
      while (bRepe) {
        bRepe = false;
        iAzar = Math.floor(Math.random() * N * N);
        for (iFila = 0; iFila <= f; iFila++) {
          for (iCol = 0; iCol < N; iCol++) {
            if (aTabla[iFila][iCol] == iAzar) {
              bRepe = true;
            }
          }
        }
      }
      aTabla[f][c] = iAzar;
      if (iAzar == 0) {
        f0 = f;
        c0 = c;
      }
    }
  }
  //Colocamos el cero en la ultima fila, ultima columna.

  Intercambiar(aTabla, f0, c0, N - 1, N - 1);

  //Ahora hay que ver si tiene solución.

  iSuma = 0;

  for (f = 0; f < N; f++) {
    for (c = 0; c < N; c++) {
      //Primero miramos en el resto de la fila
      for (iCol = c + 1; iCol < N; iCol++) {
        iSuma += aTabla[f][c] > aTabla[f][iCol] && aTabla[f][iCol] != 0 ? 1 : 0;
      }
      //Y ahora el resto de la tabla

      for (iFila = f + 1; iFila < N; iFila++) {
        for (iCol = 0; iCol < N; iCol++) {
          iSuma +=
            aTabla[f][c] > aTabla[iFila][iCol] && aTabla[iFila][iCol] != 0
              ? 1
              : 0;
        }
      }
    }
  }

  if (iSuma % 2 != 0) {
    Intercambiar(aTabla, 0, 0, 0, 1);
  }

  return aTabla;
}

function Intercambiar(aMiTabla, i, j, k, m) {
  iAux = aMiTabla[i][j];
  aMiTabla[i][j] = aMiTabla[k][m];
  aMiTabla[k][m] = iAux;
}

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
