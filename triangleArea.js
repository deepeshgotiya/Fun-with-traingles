const areaButton = document.querySelector("#A-button");
const enteredValues = document.querySelectorAll(".input-value");
const output = document.querySelector("#A-output")

function calculateBaseHeight (height,base){
    const productOfHeightBase = height * base;
    return productOfHeightBase

}
function calculateArea (){
    const productOfHeightBase = calculateBaseHeight(Number(enteredValues[0].value),Number(enteredValues[1].value))
    const areaOfTriangle = 1/2*(productOfHeightBase)
    output.innerText = "The are of this triagle will be = "+ areaOfTriangle+"cm sq"
    console.log(areaOfTriangle)
}

areaButton.addEventListener("click",calculateArea)