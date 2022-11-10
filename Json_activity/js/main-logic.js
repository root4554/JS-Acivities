const container = document.querySelector(".content");
const filterBtn = document.querySelector("button");
let languages = document.querySelectorAll("a");
let langAtr;
let offersList;

// Cookies functions

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
};

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const checkLanguage = () => {
  let language = getCookie("Language");
  console.log("language " + language);
  if (language == null) {
    console.log("dentro if checkLanguage");
    setCookie("language", "esp", 15);
    offersList = offersEsp;
  }
};

checkLanguage();

const getDestination = () => {
  let provincia = document.querySelector("#destination").value;
  return provincia;
};

const changeLanguage = (languageId) => {
  let language = getCookie("Language");
  if (languageId === "esp") {
    offersList = offersEsp;
    setCookie("language", "esp", 15);
    language = "esp";
  } else if (languageId === "eus") {
    offersList = offersEus;
    setCookie("language", "eus", 15);
    language = "eus";
  }
};

const getLanguage = () => {
  languages.forEach((language) => {
    if (language.getAttribute("selected") == "true") {
      langAtr = language.getAttribute("id");
      changeLanguage(langAtr);
    }
  });
};
const toogleLanguage = () => {
  languages.forEach((lang, index) => {
    lang.addEventListener("click", (e) => {
      langAtr = e.target.getAttribute("selected");
      if (langAtr === "false" && index === 0) {
        console.log("primer if " + langAtr + " " + index);
        lang.setAttribute("selected", "true");
        languages[1].setAttribute("selected", "false");
        changeLanguage("eus");
      } else if (langAtr === "false" && index === 1) {
        lang.setAttribute("selected", "true");
        languages[0].setAttribute("selected", "false");
        changeLanguage("esp");
      }
      getLanguage();
    });
  });
};
toogleLanguage();

const filterArray = (provincia) => {
  if (provincia === "All") {
    console.log("dentro if filterArray");
    return offersList;
  } else {
    console.log("dentro else filterArray, provincia " + provincia);

    let offersFiltres = offersList.filter(
      (offer) => offer.municipio == provincia
    );
    console.log(offersFiltres);
    return offersFiltres;
  }
};

const showOffer = () => {
  let provincia = getDestination();
  console.log("provincia " + provincia);
  let filtredList = filterArray(provincia);
  container.innerHTML = "";

  filtredList.forEach((offer) => {
    const offerElement = document.createElement("div");
    offerElement.classList.add("offer");
    offerElement.innerHTML = `
            <div class="offer__head">
            <h2>${offer.desEmpleo}</h2>
              <p>${offer.fecPub}</p>
            </div>
            <div class="offer__body">
              <p>${offer.codigo}</p>
              <p>${offer.desPuesto}</p>
              <p>${offer.provincia}</p>
              </div>
            <div class="offer__btn">
              <a href="${offer.url}" target="_blank" ><button>More info</button></a>
            </div>
              <br>
              <hr>
              <br>
          `;
    container.appendChild(offerElement);
  });
};

filterBtn.addEventListener("click", showOffer);

// setCookie(destination, "Language", 15);
