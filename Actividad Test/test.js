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

const coloring = () => {
  const answersP = document.querySelectorAll(".answers p");
  answersP.forEach((answer) => {
    if (answer.innerText === "Correcto") {
      answer.style.color = "green";
    }
    if (answer.innerText === "Incorrecto") {
      answer.style.color = "red";
    }
  });
};

const clearAnswers = () => {
  const answersDiv = document.querySelector(".answers");
  answersDiv.innerHTML = "";
};

const changeState = () => {
  console.log("changeState");
  const states = ["checked", "indeterminate", "unchecked"];
  const checkAnswers = document.querySelectorAll("input");

  checkAnswers.forEach((checkAnswer) => {
    let index = 0;
    checkAnswer.addEventListener("click", () => {
      checkAnswer.setAttribute("state", states[index]);
      index = (index + 1) % 3;
      console.log(index);
      console.log(checkAnswer.getAttribute("state"));
      switch (checkAnswer.getAttribute("state")) {
        case "checked":
          checkAnswer.checked = true;
          checkAnswer.indeterminate = false;
          break;
        case "indeterminate":
          checkAnswer.checked = false;
          checkAnswer.indeterminate = true;
          break;
        case "unchecked":
          checkAnswer.checked = false;
          checkAnswer.indeterminate = false;
          break;
      }
    });
  });
};
changeState();

// const checkAnswers = () => {
//   let inputs = document.querySelectorAll("input");
//   inputs.forEach((input) => {
//     input.addEventListener("click", () => {
//       const state = input.getAttribute("state");
//       states[("unchecked", "checked", "indeterminate")];

//       clearAnswers();
//       input.setAttribute("state", (state + 1) % 3);
//     });
//   });
// };
// checkAnswers();

const checkAnswers = () => {
  clearAnswers();
  let inputs = document.querySelectorAll("input");
  let result = 0;
  inputs.forEach((input, index) => {
    const state = input.getAttribute("state");
    // index += 1;
    if (
      state === "checked" &&
      aRespuestas[index] === true &&
      state === "unchecked" &&
      aRespuestas[index] === false
    ) {
      const correct = document.createElement("p");
      correct.innerText = "Correcto";
      document.querySelector(".answers").appendChild(correct);
      result += 1;
    } else if (input.checked && aRespuestas[index] == false) {
      result -= 0.25;
      const incorrect = document.createElement("p");
      incorrect.innerText = "Incorrecto";
      document.querySelector(".answers").appendChild(incorrect);
    } else if (input.checked == false) {
      const noAnswer = document.createElement("p");
      noAnswer.innerText = "No respondido";
      document.querySelector(".answers").appendChild(noAnswer);
    }
  });
  coloring();
  const resultDiv = document.querySelector(".resultP p");
  resultDiv.innerText = `Tu nota es ${result}`;
};

const clearCheck = () => {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.checked = false;
    input.indeterminate = false;
  });
};

// checkAnswers();
