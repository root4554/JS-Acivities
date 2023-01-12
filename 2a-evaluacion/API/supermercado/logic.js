const getInfo = () => {
  const options = { method: "GET" };

  fetch("https://supermercado.anasskbir.repl.co/secciones", options)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((element) => {
        document.getElementById(element.Seccion).innerHTML = element.Numero
          ? element.Numero
          : "CERRADO";
      });
    })
    .catch((err) => console.error(err));
};
