const container = document.querySelector(".content");
const filterBtn = document.querySelector("button");

const getDestination = () => {
  let provincia = document.querySelector("#destination").value;
  // console.log("destination " + destination);
  return provincia;
};

const filterArray = (provincia) => {
  // console.log(offers);
  if (provincia === "All") {
    console.log("dentro if filterArray");
    return offersEsp;
  } else {
    console.log("dentro else filterArray, provincia " + provincia);

    let offersFiltres = offersEsp.filter(
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
  // console.log(filtredList);
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

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
};
setCookie(destination, "TEST", 15);
