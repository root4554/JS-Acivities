const GetData = () => {
  let provincia = document.querySelector("#provincia").value;

  const data = null;
  const xhr = new XMLHttpRequest();

  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", `​https://Replit-Api.anasskbir.repl.co/${provincia}`);
  //   xhr.setRequestHeader("Autorization");
  xhr.send(data);
  console.log(provincia);
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", GetData);
