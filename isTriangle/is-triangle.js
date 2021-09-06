const inputAngles = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const msgOutput = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sum =
    Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  return sum;
}

function isTriangle() {


  const sumOfAllAngles = calculateSumOfAngles(
    inputAngles[0],
    inputAngles[1],
    inputAngles[2]
    );
    
    if (sumOfAllAngles === 180) {
      msgOutput.innerText = "Yay, the angles form a triangle!";
    } else {
      msgOutput.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
  
  
}

checkBtn.addEventListener("click", isTriangle);
