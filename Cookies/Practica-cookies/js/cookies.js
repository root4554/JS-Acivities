let Language;

sCookie = consultarCookie("Language");
if (sCookie == undefined) {
  Language = "es";
} else {
  Language = sCookie;
}
const langs = document.querySelectorAll("a");
langs.forEach((lang) => {
  const langName = lang.getAttribute("data-lang");
  switch (langName) {
    case "es":
      window.location.href = "castellano.html";
      break;
    case "en":
      window.location.href = "ingles.html";
      break;
    case "fr":
      window.location.href = "frances.html";
      break;
    case "eus":
      window.location.href = "euskera.html";
      break;
  }
});
const GrabarCookie = () => {
  mandarCookie("Language", Language, 365);
};

// const createlanguages = () => {
//   let languages = ["es", "en", "fr", "de"];
//   const langDiv = document.getElementById("languageSelect");
//   const WorldIcon = document.createElement("i");
//   WorlsIcon.className = "fas fa-globe-americas";
//   WorlsIcon.style = "font-size: 2em; color: #fff;";
//   langDiv.appendChild(WorldIcon);
//   languages.forEach((lang) => {
//     const langLink = document.createElement("a");
//     langLink.setAttribute("href", "#");
//     langLink.setAttribute(
//       "onclick",
//       "setCookie('language', '" + lang + "', 1)"
//     );
//     langLink.innerHTML = lang;
//     langDiv.appendChild(langLink);
//   });
// };
// createlanguages();
