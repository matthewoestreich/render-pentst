document.onload = () => {
  alert("Wizer");
  doAlert();
}

console.log("Loaded");

function doAlert() {
  alert("Wizer2");
}

window.addEventListener("load", () => {
  alert("loaded");
});