const cont = document.querySelector(".cont");
const text = "Hola Mundo";

const verifySpace = (txt) => {
  if (txt.includes(" ")) {
    return true;
  } else {
    return false;
  }
};

const uppercase = (txt) => {
  return txt.toUpperCase();
};

const changeToImg = () => {
  let textletters = text.split("");
  textletters.forEach((letter) => {
    console.log(letter);
    uppercase(letter);
    if (!verifySpace(letter)) {
      const img = document.createElement("img");
      img.src = `./Letras/${letter}.gif`;
      cont.appendChild(img);
    } else {
      cont.innerHTML += `<img src="Letras/Vacio.gif" alt="space">`;
    }
  });
};
changeToImg();
