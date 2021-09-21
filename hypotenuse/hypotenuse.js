const baseInput = document.querySelector("#base-value");
const heigtInput = document.querySelector("#height-value");
const calculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");

function showMsg(msg) {
  output.innerText = msg;
}

function calculateHypotenuse() {
  if (baseInput.value && heigtInput.value) {
    if (baseInput.value <= 0 || heigtInput.value <= 0) {
      const message = `Entered value should be greater than zero`;
      showMsg(message);
    } else {
      const baseInputValue = Number(baseInput.value);
      const heightInputValue = Number(heigtInput.value);
      const baseInputValueSquare = baseInputValue * baseInputValue;
      const heightInputValueSquare = heightInputValue * heightInputValue;

      const hypotenuseLength = Math.sqrt(
        baseInputValueSquare + heightInputValueSquare
      );
      const message = `The length of hypotenuse is ${hypotenuseLength.toFixed(
        2
      )}`;
      showMsg(message);
    }
  } else {
    const message = `Please Enter Value in Both Fieds`;
    showMsg(message);
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
