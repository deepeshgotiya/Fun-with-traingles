const resultBtn = document.querySelector("#calculateBtn");
const sideInput = document.querySelectorAll(".side-value");
const output = document.querySelector("#H-output");

function calculateSumOfSides(a,b){
    if(a<0 || b<0){
        output.innerText = "Enter a valid input"
    }else{
        const sumOfsquare = a*a + b*b ;
        return sumOfsquare;
    }
}

function calculateHypotanuse (){
    // if(Number(sideInput[0].value)> 0 ||  Number(sideInput[1].value)>0){
        const sumOfsquare = calculateSumOfSides(Number(sideInput[0].value),Number(sideInput[1].value));
        const lenghtOfHypotenuse = Math.sqrt(sumOfsquare);
        output.innerText = "The sum of hypotenuse is " + lenghtOfHypotenuse
    // }else{
    //     output.innerText = "Enter a valid input"
    // }
}
resultBtn.addEventListener("click", calculateHypotanuse)