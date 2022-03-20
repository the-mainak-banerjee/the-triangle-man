// Is-Triangle

const angleInputs = document.querySelectorAll(".angleInputs")
const checkBtn = document.querySelector("#checkBtn")
const showOutput = document.querySelector("#showOutput")
const errMsg1 = document.querySelector("#errMsg1")


function calculateSumOfAngles(angles) {
    let sum = Number(angles[0].value) + Number(angles[1].value)  + Number(angles[2].value);
    return sum;
}

function isTriangle() {
    
    if(angleInputs[0].value && angleInputs[1].value && angleInputs[2].value){
        errMsg1.classList.add("hideElement")
        let sumOfAngles = calculateSumOfAngles(angleInputs)
        if(sumOfAngles === 180){
            showOutput.innerText = `Yayyy!! The Angles From A Triangle`
        }
        else{
            showOutput.innerText = `Oh Oh!, the angles don't form a triangle.`  
        }
    }
    else{
        errMsg1.classList.remove("hideElement")
        errMsg1.innerText = "*Please add All Angles First*"
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
const errMsg2 = document.querySelector("#errMsg2") 


function calculateHypo () {
    let a = Number(sideInputs[0].value)
    let b = Number(sideInputs[1].value)
    if(a< 1 || b < 1){
        errMsg2.classList.remove("hideElement")
        errMsg2.innerText = "*Please add Positive Value First*"
    }
    else{
        errMsg2.classList.add("hideElement")
        let hypo = Math.sqrt((a**2) + (b**2))
        getOutput.innerText = `The length of the hypotenuse is ${hypo} cm`
    }
}

checkHypo.addEventListener("click", calculateHypo)


// Area Of Traingle

const lengthInputs = document.querySelectorAll(".lengthInputs")
const getArea = document.querySelector("#getArea")
const showArea = document.querySelector("#showArea")
const errMsg3 = document.querySelector("#errMsg3")


function calculateArea() {
    let base = Number(lengthInputs[0].value)
    let height = Number(lengthInputs[1].value)
    if(base < 1 || height < 1){
        errMsg3.classList.remove("hideElement")
        errMsg3.innerText = "*Please add Positive Value First*"
    }
    else{
        errMsg3.classList.add("hideElement")
        let area = (base*height)/2;
        showArea.innerText = `The Area Is ${area}`
    }
}

getArea.addEventListener("click", calculateArea )