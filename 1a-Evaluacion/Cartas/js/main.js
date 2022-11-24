const main = document.querySelector(".main"); //selecciona el elemento con la clase main para añadirle los divs con las cartas
let cardsTable = CrearTablaCartas(4, 10); //crea el array con las cartas
let cardsTableBool = []; // crear el array con las cartas boca abajo con valores false
let flippedcards = []; // crear el array con las cartas que estan boca arriba
trueCounter = 0; // contador para saber cuantas cartas estan boca arriba
clickCounter = 0; // contador de clicks

// dar la vuelta a las cartas boca arriba
const flipToFace = (cardElement, card, cardsTableBool, rowIndex, cardIndex) => {
  cardElement.src = `./Baraja/${card}.png`;
  // dar a las cartas boca arriba el valor true en el array cardsTableBool
  cardsTableBool[rowIndex][cardIndex] = true;
  // añadir las cartas boca arriba al array flippedcards
  flippedcards.push(card);
  // encrementar el contador de cartas boca arriba
  trueCounter++;
};

// dar la vuelta a las cartas boca abajo
const flipToBack = (cardElement, card, cardsTableBool, rowIndex, cardIndex) => {
  cardElement.src = "./Baraja/0.png";
  cardsTableBool[rowIndex][cardIndex] = false;
  trueCounter--;
  // si la carta esta boca abajo se quita del array flippedcards
  if (trueCounter == 0) {
    flippedcards = [];
  }
};

// comprobar si las cartas son iguales
const checkCards = () => {
  // si hay dos cartas boca arriba se comprueba si son iguales
  if (flippedcards.length == 2) {
    if (flippedcards[0] == flippedcards[1]) {
      cardsTable.forEach((row, rowIndex) => {
        row.forEach((card, cardIndex) => {
          if (card == flippedcards[0] || card == flippedcards[1]) {
            // si son iguales se quedan boca arriba y se quitan del array flippedcards y
            // se dan el valor null en el array cardsTableBool para que no se vuelvan a voltear
            cardsTableBool[rowIndex][cardIndex] = null;
          }
        });
      });
      flippedcards = [];
      trueCounter = 0;
    }
  }
};

// dar la vuelta a las dos primeras cartas boca abajo
const reverseCards = () => {
  if (flippedcards.length > 2) {
    cardsTable.forEach((row, rowIndex) => {
      row.forEach((card, cardIndex) => {
        // si la carta esta boca arriba se da la vuelta boca abajo
        if (
          cardsTableBool[rowIndex][cardIndex] == true &&
          (cardsTable[rowIndex][cardIndex] == flippedcards[0] ||
            cardsTable[rowIndex][cardIndex] == flippedcards[1])
        ) {
          // llamar a la funcion flipToBack
          flipToBack(
            document.querySelectorAll("img")[rowIndex * 10 + cardIndex], //devuelve un array de todos los elementos img y se accede al elemento concreto con el indice de la fila y columna por ejemplo [10 + 4] saca la carta de la fila 1 columna 5
            card,
            cardsTableBool,
            rowIndex,
            cardIndex
          );
        }
      });
    });
    // quitamos los dos primeros elementos del array flippedcards (las dos cartas que se han volteado)
    flippedcards.splice(0, 2);
  }
};

// comprueba si el juego ha terminado
const checkWin = () => {
  // si todas las cartas estan boca arriba se muestra el mensaje de victoria
  if (cardsTableBool.flat().every((card) => card == null)) {
    // alert("¡Has ganado!");
    const tries = document.querySelector("#counter").innerHTML;
    const time = document.querySelector("#timer").innerHTML;

    const counterCongrats = (document.querySelector(
      "#counter-congratulations"
    ).innerHTML = tries);
    const timerCongrats = (document.querySelector(
      "#timer-congratulations"
    ).innerHTML = time);

    document.querySelector(".AlertCont").style.display = "flex";
  }
};

const resetGame = () => {
  // reiniciar la pagina
  location.reload();
};
document.querySelector("#btn-restart").addEventListener("click", resetGame);

// mostrar el numero de clicks
const showClicks = () => {
  const clicks = document.querySelector("span");
  clicks.innerHTML = "";
  clicks.innerHTML = clickCounter;
};

// dar la vuelta a las cartas
const flipCards = (cardElement, card, cardsTableBool, rowIndex, cardIndex) => {
  cardElement.addEventListener("click", () => {
    if (cardsTableBool[rowIndex][cardIndex] == false) {
      flipToFace(cardElement, card, cardsTableBool, rowIndex, cardIndex);
    } else if (cardsTableBool[rowIndex][cardIndex] == true) {
      flipToBack(cardElement, card, cardsTableBool, rowIndex, cardIndex);
    }
    clickCounter++; // encrementar el contador de clicks

    // a cada click se comprueba si las cartas son iguales si lo son se quedan boca arriba y si no se vuelven a poner boca abajo
    checkCards();
    reverseCards();
    checkWin();
    showClicks();
  });
};

// anadir temporizador
const timer = () => {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    const time = document.querySelector("#timer");
    time.innerHTML = "";
    time.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
};
timer();

// load cards animation
const loadCardsAnimation = () => {
  const cards = document.querySelectorAll("img");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.src = "./Baraja/0.png";
      card.style.transform = `translate(0px, 0px)`;
      card.style.transition = "all 0.1s ease";
    }, index * 20);
  });
};

// crear el tablero de cartas
const createCardsTable = () => {
  cardsTable.forEach((row, rowIndex) => {
    const rowElement = document.createElement("div");
    cardsTableBool.push([]);
    row.forEach((card, cardIndex) => {
      cardsTableBool[rowIndex].push(false);
      const cardElement = document.createElement("img");
      cardElement.src = "Baraja/0.png";
      rowElement.appendChild(cardElement);
      // posicionar las cartas con animacion
      const randomX = Math.floor(Math.random() * (300 - -300)) + -300;
      const randomY = Math.floor(Math.random() * (300 - -300)) + -300;
      cardElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
      // ... FIN de posicionar las cartas con animacion
      flipCards(cardElement, card, cardsTableBool, rowIndex, cardIndex);
    });
    main.appendChild(rowElement);
    loadCardsAnimation();
  });
};
createCardsTable();
