const setInfo = () => {
  let city = document.getElementById("ciudad").value;
  let state = document.getElementById("estado").value;
  console.log(city, state);
  // Javascript fetch
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Ciudad: "city",
      Estado: "state",
    }),
  };
  fetch("https://meteorologia.anasskbir.repl.co/cambios", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // jQuery ajax fetch
  //   $.ajax({
  //     type: "POST",
  //     url: "https://meteorologia.anasskbir.repl.co/cambios",
  //     data: {
  //       Ciudad: document.getElementById("ciudad").value,
  //       Estado: document.getElementById("estado").value,
  //     },
  //     success: (response) => console.log(response),
  //   });
};

document.getElementById("btn").addEventListener("click", setInfo);
