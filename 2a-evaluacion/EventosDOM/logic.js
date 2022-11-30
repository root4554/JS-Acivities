const body = document.querySelector("body");
const mouseX = document.querySelector("#mouseX");
const mouseY = document.querySelector("#mouseY");
const mouseClick = document.querySelector("#mouseClick");

body.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  mouseX.textContent = clientX;
  mouseY.textContent = clientY;
});

const search = (value, engine) => {
  engineName = engine.getAttribute("name");
  if (engineName == "G") {
    window.open(`https://www.google.com/search?q=${value}`);
  }
  if (engineName == "B") {
    window.open(`https://www.bing.com/search?q=${value}`);
  }
  if (engineName == "A") {
    window.open(`https://www.ask.com/web?q=${value}`);
  }
};

body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let body = document.querySelector("body");

  let existmenu = document.querySelector(".menu");
  if (existmenu) {
    body.removeChild(existmenu);
  }

  let menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `<a  name="G" target="blank">Google</a>
                    <a  name="B" target="blank">bing</a>
                    <a  name="A" target="blank">ask</a>`;
  body.appendChild(menu);
  menu.style.top = `${e.clientY}px`;
  menu.style.left = `${e.clientX}px`;

  if (e.clientX + menu.clientWidth > window.innerWidth) {
    menu.style.left = `${e.clientX - menu.clientWidth}px`;
  }
  if (e.clientY + menu.clientHeight > window.innerHeight) {
    menu.style.top = `${e.clientY - menu.clientHeight}px`;
  }
  const mouseClick = document.querySelector("#mouseClick");
  mouseClick.textContent = "click derecho";

  let engines = document.querySelectorAll("a");
  engines.forEach((engine) => {
    engine.addEventListener("click", (e) => {
      let value = document.querySelector("#search").value;
      search(value, engine);
    });
  });
});

body.addEventListener("click", (e) => {
  mouseClick.textContent = "click izquierdo";
  let existmenu = document.querySelector(".menu");
  if (existmenu) {
    body.removeChild(existmenu);
  }
});

const EscPressed = (e) => {
  if (e.key === "Escape") {
    let existmenu = document.querySelector(".menu");
    if (existmenu) {
      body.removeChild(existmenu);
    }
  }
};
window.addEventListener("keydown", EscPressed);
