// Is-Triangle

const angleInputs = document.querySelectorAll(".angleInputs")
const checkBtn = document.querySelector("#checkBtn")
const showOutput = document.querySelector("#showOutput")


function calculateSumOfAngles(angles) {
    let sum = Number(angles[0].value) + Number(angles[1].value)  + Number(angles[2].value);
    for(angle of angles){
        angle.value = "";
    }
    return sum;
}

function isTriangle() {
    let sumOfAngles = calculateSumOfAngles(angleInputs)
    if(sumOfAngles === 180){
        showOutput.value = `Yayyy!! The Angles From A Triangle`
    }
    else{
        showOutput.value = `Oh Oh!, the angles do not form a triangle. Try Again With Different Angles`  
    }
}

checkBtn.addEventListener("click", isTriangle)


// Triangle Quiz

const quizForm = document.querySelector("#quizForm")
const submitFoem = document.querySelector("#submitForm")
const showScore = document.querySelector("#showScore")

let correctAnswers = ["90°","right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for(let data of formResults.values()){
        if(data === correctAnswers[index]){
            score += 1;
        }
        index += 1
    }
    showScore.innerText = `Your Score is ${score}`
}

submitFoem.addEventListener("click", calculateScore)



// Check Hypotenuse

const sideInputs = document.querySelectorAll(".sideInputs")
const checkHypo = document.querySelector("#checkHypo")
const getOutput = document.querySelector("#getOutput") 


function calculateHypo () {
    let a = Number(sideInputs[0].value)
    let b = Number(sideInputs[1].value)
    let hypo = Math.sqrt((a**2) + (b**2))
    getOutput.innerText = `The length of the hypotenuse is ${hypo} cm`
}

checkHypo.addEventListener("click", calculateHypo)


// Area Of Traingle

const lengthInputs = document.querySelectorAll(".lengthInputs")
const getArea = document.querySelector("#getArea")
const showArea = document.querySelector("#showArea")


function calculateArea() {
    let base = Number(lengthInputs[0].value)
    let height = Number(lengthInputs[1].value)
    let area = (base*height)/2;
    console.log(area)
}

getArea.addEventListener("click", calculateArea )