const cont = document.querySelector(".cont");
const text = "Plaiaundi";
let textletters = text.split("");

const verifySpace = (txt) => {
  if (txt.includes(" ")) {
    return true;
  } else {
    return false;
  }
};

const addSpaces = () => {
  textletters.unshift("Blanco", "Blanco");
  textletters.push("Blanco", "Blanco");
};
addSpaces();

const changeToImg = () => {
  textletters.forEach((letter) => {
    if (!verifySpace(letter)) {
      const img = document.createElement("img");
      img.src = `./Letras/${letter}.gif`;
      cont.appendChild(img);
    } else {
      cont.innerHTML += `<img src="Letras/Vacio.gif" alt="space">`;
    }
  });
};

const changePosition = () => {
  textletters = textletters.map((letter, index) => {
    if (index === 0) {
      return textletters[textletters.length - 1];
    } else {
      return textletters[index - 1];
    }
  });
  cont.innerHTML = "";
  changeToImg();
};

setInterval(changePosition, 250);
// changeToImg();
