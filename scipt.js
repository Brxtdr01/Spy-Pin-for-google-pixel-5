const dots = document.querySelectorAll("#pin-overlay .dot");
let code = "";

function updateDots() {
  dots.forEach((dot, index) => {
    if (index < code.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}
