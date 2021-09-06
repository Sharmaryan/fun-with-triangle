const form = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('.submit-btn');
const showOutput = document.querySelector('.output');

const answerList = [
  "3",
  "3",
  "scalene",
  "isosceles",
  "equilateral",
  "Equilateral triangle",
];

function calculateScore(){
    const formResults = new FormData(form);
    let score = 0, index = 0;
    for(let value of formResults.values()){
        if(value === answerList[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    showOutput.innerText = `The Score is ${score}`;
}

submitBtn.addEventListener('click', calculateScore);