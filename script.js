let body = document.querySelector("body");
let mouseColor = document.getElementById("selectColor");
let allShowMouses = [];
let showMouse;
let changeFill = false;
let root = document.querySelector(":root");
let fontRange = document.querySelector("#fontRange");
body.addEventListener("mousemove", moveMouse);
setInterval(() => {
  allShowMouses.forEach((showM) => {
    showM.remove();
  });
}, 130);
function moveMouse(event) {
  showMouse = document.createElement("div");
  showMouse.style.setProperty("--b", event.x);
  showMouse.style.setProperty("--l", event.y);
  if (!changeFill) {
    // showMouse.style.fill = "#eee";
  }
  showMouse.classList.add("showMouse");
  showMouse.innerHTML = `<svg class="mouseSVG" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
  <path d="M 29.699219 47 C 29.578125 47 29.457031 46.976563 29.339844 46.933594 C 29.089844 46.835938 28.890625 46.644531 28.78125 46.398438 L 22.945313 32.90625 L 15.683594 39.730469 C 15.394531 40.003906 14.96875 40.074219 14.601563 39.917969 C 14.238281 39.761719 14 39.398438 14 39 L 14 6 C 14 5.601563 14.234375 5.242188 14.601563 5.082031 C 14.964844 4.925781 15.390625 4.996094 15.683594 5.269531 L 39.683594 27.667969 C 39.972656 27.9375 40.074219 28.355469 39.945313 28.726563 C 39.816406 29.101563 39.480469 29.363281 39.085938 29.398438 L 28.902344 30.273438 L 35.007813 43.585938 C 35.117188 43.824219 35.128906 44.101563 35.035156 44.351563 C 34.941406 44.601563 34.757813 44.800781 34.515625 44.910156 L 30.113281 46.910156 C 29.980469 46.96875 29.84375 47 29.699219 47 Z"></path>
  </svg>`;
  allShowMouses.push(showMouse);
  body.append(showMouse);
}

mouseColor.addEventListener("change", (eventM) => {
  // console.log(eventM.target.value);
  // showMouse.style.setProperty("--mouseColor", eventM.target.value);
  // console.log(showMouse.style.fill);
  root.style.setProperty("--mouseColor", `${eventM.target.value}`);
  showMouse.style.fill = `${eventM.target.value}`;

  // moveMouse(event);
  changeFill = true;
});
fontRange.addEventListener("input", (event) => {
  console.log("Range Changed! value is : " + event.target.value);
  root.style.setProperty("--widthSize", `${event.target.value}px`);
  root.style.setProperty("--heightSize", `${event.target.value}px`);
});
