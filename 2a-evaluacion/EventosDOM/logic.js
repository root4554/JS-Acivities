const body = document.querySelector("body");
const mouseX = document.querySelector("#mouseX");
const mouseY = document.querySelector("#mouseY");
const mouseClick = document.querySelector("#mouseClick");

body.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  mouseX.textContent = clientX;
  mouseY.textContent = clientY;
});

const search = (engine) => {
  window.open(`${engine.href}${value}`);
  console.log(`${engine.href}${value}`);
};

body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let body = document.querySelector("body");

  body.removeChild(body.lastChild);
  const menu = document.createElement("div");
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

  let searchEngine = document.querySelector("a");
  searchEngine.addEventListener("click", (e) => {
    const input = document.querySelector("#search");
    const value = input.value;
    engineName = searchEngine.getAttribute("name");
    if (engineName === "G") {
      console.log("google");
      window.open(`https://www.google.com/search?q=${value}`);
    }
    if (engineName === "B") {
      console.log("bing");
      window.open(`https://www.bing.com/search?q=${value}`);
    }
    if (engineName === "A") {
      console.log("ask");
      window.open(`https://www.ask.com/web?q=${value}`);
    }
  });
});

body.addEventListener("click", (e) => {
  mouseClick.textContent = "click izquierdo";
  body.removeChild(body.lastChild);
});

const EscPressed = (e) => {
  if (e.key === "Escape") {
    body.removeChild(body.lastChild);
  }
};
window.addEventListener("keydown", EscPressed);
