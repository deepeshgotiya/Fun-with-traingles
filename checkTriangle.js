const enteredAngles = document.querySelectorAll(".angle-input")
const checkTriangleBtn = document.querySelector("#check-triangle")
const output = document.querySelector("#output-box")

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3 ;
    return sumOfAngles;
}
function checkTriangle(){
    const sumOfAngles = calculateSum(Number(enteredAngles[0].value),Number(enteredAngles[1].value),Number(enteredAngles[2].value))
    if(sumOfAngles===180){
        output.innerText = "Angles forms a triangle";
    }else{
        output.innerTexts = "Angles dont from a triangle";
    }
}

checkTriangleBtn.addEventListener("click" , checkTriangle)