const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.value; // Get button's value (e.g., "purple")
    changeBackground(color);
  });
});

function changeBackground(color) {
  document.body.className = ""; // Remove existing classes
  document.body.classList.add(color); // Add new color class
}
const body = document.body;

function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}






