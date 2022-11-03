const container = document.querySelector(".content");
const filterBtn = document.querySelector("button");

const getDestination = () => {
  let destination = document.querySelector("#destination").value;
  if (destination === "All") {
    return "";
  } else return destination;
};

const filterArray = (provincia) => {
  console.log("array sin filter " + offers);
  if (provincia === "") {
    return offers;
  } else {
    return offers.filter((offer) => offer.municipio == "destination");
  }
};

const showOffer = () => {
  const zona = getDestination();
  console.log(zona);
  const filtredList = filterArray(zona);
  console.log(filtredList);
  filtredList.forEach((offer) => {
    const offerElement = document.createElement("div");
    offerElement.classList.add("offer");
    offerElement.innerHTML = `
              <h3>${offer.codigo}</h3>
              <p>${offer.desEmpleo}</p>
              <p>${offer.provincia}</p>
              <hr>
              <br>
          `;
    container.appendChild(offerElement);
  });
};

filterBtn.addEventListener("click", showOffer);
