const form = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".submit-btn");
const showOutput = document.querySelector(".output");

const answerList = [
  "3",
  "3",
  "scalene",
  "isosceles",
  "equilateral",
  "Equilateral triangle",
  "Pythagoras",
  "Polygon",
  "2",
  "False",
];

function calculateScore(event) {
  event.preventDefault();
  let score = 0,index = 0;
  const formResults = new FormData(form);
  for (let value of formResults.values()) {
    if (value === answerList[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  showOutput.innerText = `The Score is ${score}`;
  submitBtn.style.display = "none";
}

form.addEventListener("submit", calculateScore);
