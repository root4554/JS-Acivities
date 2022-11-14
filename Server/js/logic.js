const slideUp = [{ top: "30px" }, { top: "0px" }];

const slideUpTiming = {
  duration: 1000,
  iterations: 1,
  easing: "ease-in-out",
  forwards: true,
};

const links = document.querySelectorAll("a");
const startAnimation = () => {
  links.forEach((link) => {
    slideUpTiming.duration = slideUpTiming.duration + 100;
    console.log(slideUpTiming.duration);
    link.animate(slideUp, slideUpTiming);
  });
};

startAnimation();
