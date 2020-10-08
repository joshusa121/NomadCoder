// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");

const resize_mid = "mid";
const resize_big = "big";

function resize() {
  const currentWidth = window.innerWidth;

  if (currentWidth < 600) {
    body.classList.add(resize_mid);
  } else if (currentWidth > 1000) {
    body.classList.add(resize_big);
  } else {
    body.className = "";
  }
}
window.addEventListener("resize", resize);
