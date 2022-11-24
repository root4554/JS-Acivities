const body = document.querySelector("body");
const mouseX = document.querySelector("#mouseX");
const mouseY = document.querySelector("#mouseY");
const mouseClick = document.querySelector("#mouseClick");

body.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  //   console.log(clientX, clientY);
  mouseX.textContent = clientX;
  mouseY.textContent = clientY;
});

body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `<a href="https://www.google.com">Google</a>
                    <a href="https://www.bing.com">bing</a>
                    <a href="https://www.ask.com">ask</a>`;

  body.appendChild(menu);
  console.log(e);
});
