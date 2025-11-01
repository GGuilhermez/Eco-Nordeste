let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  let textMove = Math.min(value * 3, 500);
  text.style.transform = `translateY(${textMove}px)`;

  leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
  hill5.style.transform = `translateX(${value * 1.5}px)`;
  hill4.style.transform = `translateX(${value * -1.5}px)`;
  const hill1Move = Math.min(value * 1, 200);
  hill1.style.transform = `translateY(${hill1Move}px)`;
});
