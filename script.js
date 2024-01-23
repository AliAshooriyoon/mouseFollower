// let btn = document.getElementById("btn");
// btn.addEventListener("mousedown", () => {
//   console.log("mousedown!");
// });
// btn.addEventListener("mouseup", () => {
//   console.log("mouseup!");
// });
// btn.addEventListener("mouseenter", () => {
//   console.log("MouseEnter");
// });
// btn.addEventListener("mouseover", () => {
//   console.log("mouse Over");
// });
// btn.addEventListener("mouseout", () => {
//   console.log("mouse Out");
// });
let root = document.querySelector("#24b364");
let varRoot = getComputedStyle(root);
console.log(varRoot,getPropertyValue("--color"));
document.addEventListener("mousemove", (event) => {
  console.log(event);
  let showMouse = document.createElement("div");
});
