const resultBtn = document.querySelector("#calculateBtn");
const sideInput = document.querySelectorAll(".side-value");
const output = document.querySelector("#H-output");

function calculateSumOfSides(a,b){
    const sumOfsquare = a*a + b*b ;
    return sumOfsquare;
}

function calculateHypotanuse (){
    const sumOfsquare = calculateSumOfSides(Number(sideInput[0].value),Number(sideInput[1].value));
    const lenghtOfHypotenuse = Math.sqrt(sumOfsquare);
    output.innerText = "The sum of hypotenuse is " + lenghtOfHypotenuse
}
resultBtn.addEventListener("click", calculateHypotanuse)