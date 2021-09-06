const inputAngles = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const msgOutput = document.querySelector("#output");

function calculateAreaOfTriange(){
    if(inputAngles[0].value && inputAngles[1].value){

        const base = inputAngles[0].value;
        const height = inputAngles[1].value;
        const area = (base*height)/2;
        msgOutput.innerText = `The area of triangle is ${area}`;
    }
    else{
        msgOutput.innerText = `Enter Value in Both Fields`;

    }
}

checkBtn.addEventListener('click', calculateAreaOfTriange)
