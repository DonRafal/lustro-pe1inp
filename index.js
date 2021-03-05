import "./style.css";

const input = document.querySelector(".text-input");
const mirror = document.querySelector(".mirror");

mirror.innerHTML = input.value
  .split("")
  .reverse()
  .join("");
