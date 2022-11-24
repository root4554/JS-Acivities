const mesesEsp = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const mesesEus = [
  "Urtarrila",
  "Otsaila",
  "Martxoa",
  "Apirila",
  "Maiatza",
  "Ekaina",
  "Uztaila",
  "Abuztua",
  "Iraila",
  "Urria",
  "Azaroa",
  "Abendua",
];

const setLocaleStorageLanguage = (language) => {
  localStorage.setItem("language", language);
};
const getLodcalStorageLanguage = () => {
  return localStorage.getItem("language");
};

const changeLanguage = (language) => {
  setLocaleStorageLanguage(language);
  const languageSelected = getLodcalStorageLanguage();
};

const getLanguagefromInput = () => {
  let inputV = document.querySelector("#language").value;
  return inputV;
};

// Funcion que cambia el mes en el DOM
const getDate = () => {
  const date = new Date();
  let languageList = getLanguagefromInput();
  setLocaleStorageLanguage(languageList);

  const storedlanguage = getLodcalStorageLanguage();

  //comprobar si el idioma es euskera o español
  if (storedlanguage === "esp") {
    console.log("if Español");
    setLocaleStorageLanguage(languageList);
    showlist = mesesEsp;
  } else if (storedlanguage === "eus") {
    console.log("if Euskera");
    setLocaleStorageLanguage(languageList);
    showlist = mesesEus;
  } else {
    showlist = mesesEsp;
  }

  var mes = showlist[date.getMonth()];
  return mes;
};

const changeMesToImg = (mes) => {
  // Quitar el mes del DOM y poner la nueva imagen
  document.querySelector(".container").innerHTML = "";

  // repartir el mes en letras
  let mesInChars = mes.split("");

  // crear un img por cada letra
  mesInChars.forEach((char) => {
    let pic = document.createElement("img");
    pic.src = `Letras/${char}.gif`;
    pic.onclick = () => {
      pic.src = `Letras/Vacio.gif`;
    };
    //añadir la imagen al contenedor
    document.querySelector(".container").appendChild(pic);
  });
};
changeLanguage(getLanguagefromInput());
const mes = getDate();
changeMesToImg(mes);

document.querySelector("#language").addEventListener("change", () => {
  changeLanguage(getLanguagefromInput());
  const mes = getDate();
  changeMesToImg(mes);
});
