// [true, false, false, true].map((x) => 0).reduce((x, acc) => x + acc);

var iPreguntas = 10;
var aPreguntas = [];
var aRespuestas = [];
aPreguntas[1] = "Paris es la capital de Alemania";
aRespuestas[1] = false;
aPreguntas[2] = "Atenas es la capital de Grecia";
aRespuestas[2] = true;
aPreguntas[3] = "Amsterdam es la capital de Paises Bajos";
aRespuestas[3] = true;
aPreguntas[4] = "Viena es la captital de Austria";
aRespuestas[4] = true;
aPreguntas[5] = "Budapest es la capital de Rusia";
aRespuestas[5] = false;
aPreguntas[6] = "Praga es la capital de Rumania";
aRespuestas[6] = false;
aPreguntas[7] = "Minsk es la capital de Bielorrusia";
aRespuestas[7] = true;
aPreguntas[8] = "Varsovia es la capital de Polonia";
aRespuestas[8] = true;
aPreguntas[9] = "Sofia es la capital de Belgica";
aRespuestas[9] = false;
aPreguntas[10] = "Riga es la capital de Letonia";
aRespuestas[10] = true;

const createQuestions = () => {
  const questionsDiv = document.querySelector(".questions");
  aPreguntas.forEach((question, index) => {
    // console.log(question);
    question = document.createElement("p");
    question.innerText = aPreguntas[index];
    checkAnswer = document.createElement("input");
    checkAnswer.setAttribute("type", "checkbox");
    questionsDiv.appendChild(question);
    questionsDiv.appendChild(checkAnswer);
  });
};
createQuestions();

const checkAnswers = () => {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    console.log(input.checked);
    // input.indeterminate = true;
    console.log(aRespuestas[index]);
    if (input.checked === aRespuestas[index]) {
      //   console.log("Correcto");
    } else {
      //   console.log("Incorrecto");
    }
  });
};
checkAnswers();
