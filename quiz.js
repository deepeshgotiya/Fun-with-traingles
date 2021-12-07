const submitBtn = document.querySelector("#submit-answer")
const scoreBox = document.querySelector("#outputDiv")
const formDataValues = document.querySelector(".quiz-form")

const rightAnswers = ["Midsegment","Equilateral","Right","Acute1","Equilateral"];

function calcultateScore(){
    let index = 0;
    let score = 0;
    const formResults = new FormData(formDataValues);
    for(let value of formResults.values()){
        if(value===rightAnswers[index]){
            score= score+1;
        }
        index=index+1
    }
    scoreBox.innerHTML = "Your Score is "+score
}




submitBtn.addEventListener("click", calcultateScore)