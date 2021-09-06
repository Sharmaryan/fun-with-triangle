const baseInput = document.querySelector('#base-value');
const heigtInput = document.querySelector('#height-value');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output');

function calculateHypotenuse(){
    if(baseInput.value && heigtInput.value){

        const baseInputValue = Number(baseInput.value);
        const heightInputValue = Number(heigtInput.value);
        const baseInputValueSquare = baseInputValue * baseInputValue;
        const heightInputValueSquare = heightInputValue * heightInputValue;
        
        
        const hypotenuseLength = Math.sqrt(baseInputValueSquare + heightInputValueSquare);
        output.innerText = `The length of hypotenuse is ${hypotenuseLength}`;
    }
    else{
        output.innerText = 'Please Enter Value in Both Fieds'
    }
}

calculateBtn.addEventListener('click', calculateHypotenuse);