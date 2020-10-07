// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
마우스 올리면 텍스트 바뀜 mouseenter
✅ The text of the title should change when the mouse is leaves it.
마우스 내리면 텍스트 바뀜 mouseleave
✅ When the window is resized the title should change.
윈도우 창 리사이즈 되면 resize
✅ On right click the title should also change.
우클릭 텍스트 contextmenu

✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.getElementById("title");

const superEventHandler = {
  mouseOn: function on() {
    title.innerHTML = "MOUSE IS ON";
    title.style.color = "#1abc9c";
  },
  mouseOff: function off() {
    title.innerHTML = "MOUSE IS OFF";
    title.style.color = "#3498db";
  },
  resizeHandler: function resize() {
    title.innerHTML = "RESIZE";
    title.style.color = "#9b59b6";
  },
  rightClick: function right() {
    title.innerHTML = "RIGHT CLICK";
    title.style.color = "#f39c12";
  }
};
title.addEventListener("mouseenter", superEventHandler.mouseOn);
title.addEventListener("mouseleave", superEventHandler.mouseOff);
window.addEventListener("resize", superEventHandler.resizeHandler);
title.addEventListener("contextmenu", superEventHandler.rightClick);

//title.style.color = "red"
