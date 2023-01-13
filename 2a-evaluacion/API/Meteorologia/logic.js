const getInfo = () => {
  const options = { method: "GET" };

  fetch("https://meteorologia.anasskbir.repl.co/meteo", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

document.onload = getInfo();
