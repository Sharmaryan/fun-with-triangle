const inputAngles = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const msgOutput = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sum =
    Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  return sum;
}

function showMsg(msg) {
  msgOutput.innerText = msg;
}

function isTriangle() {
  if (inputAngles[0].value && inputAngles[1].value && inputAngles[2].value) {
    if (
      inputAngles[0].value <= 0 ||
      inputAngles[1].value <= 0 ||
      inputAngles[2].value <= 0
    ) {
      const message = `Value should be greater than 0`;
      showMsg(message);
    } else {
      const sumOfAllAngles = calculateSumOfAngles(
        inputAngles[0],
        inputAngles[1],
        inputAngles[2]
      );

      if (sumOfAllAngles === 180) {
        const message = `Yay, the angles form a triangle!`;
        showMsg(message);
      } else {
        const message = `Oh Oh! The angle doesn't form a triangle`;
        showMsg(message);
      }
    }
  } else {
    const message = `All fields are mandatory, don't leave empty`;
    showMsg(message);
  }
}

checkBtn.addEventListener("click", isTriangle);
