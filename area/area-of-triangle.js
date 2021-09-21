const inputAngles = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const msgOutput = document.querySelector("#output");

function showMsg(msg) {
  msgOutput.innerText = msg;
}

function calculateAreaOfTriange() {
  if (inputAngles[0].value && inputAngles[1].value) {
    if (inputAngles[0].value <= 0 || inputAngles[1].value <= 0) {
      const message = `Entered value must be greater than zero`;
      showMsg(message);
    } else {
      const base = inputAngles[0].value;
      const height = inputAngles[1].value;
      const area = (base * height) / 2;
      const message = `The area of triangle is ${area}`;
      showMsg(message);
    }
  } else {
    const message = `Enter Value in Both Fields`;
    showMsg(message);
  }
}

checkBtn.addEventListener("click", calculateAreaOfTriange);
