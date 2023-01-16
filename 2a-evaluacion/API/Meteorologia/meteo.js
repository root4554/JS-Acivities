const getState = (response) => {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    let tdClass = td.className;
    response.forEach((element) => {
      if (element.Ciudad === tdClass) {
        td.innerHtml = "";
        td.innerHTML = `<img src="Imagenes/${element.Estado}.gif" /> `;
      }
    });
  });
};
const getInfo = () => {
  // Javascript fetch
  // const options = { method: "GET" };
  // console.log("Getting info...");
  // fetch("https://meteorologia.anasskbir.repl.co/meteo", options)
  //   .then((response) => response.json())
  //   .then((response) => getState(response))
  //   .catch((err) => console.error(err));

  // jQuery ajax fetch
  $.ajax({
    type: "GET",
    url: "https://meteorologia.anasskbir.repl.co/meteo",
    success: getState,
  });
};

document.onload = getInfo();
setInterval(getInfo, 4000);


