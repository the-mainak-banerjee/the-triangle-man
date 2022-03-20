const angleInputs = document.querySelectorAll(".angleInputs")
const checkBtn = document.querySelector("#checkBtn")
const showOutput = document.querySelector("#showOutput")


function calculateSumOfAngles(angle) {
    return Number(angle[0].value) + Number(angle[1].value)  + Number(angle[2].value);
}

function isTriangle() {
    let sumOfAngles = calculateSumOfAngles(angleInputs)
    if(sumOfAngles === 180){
        console.log("Is Triangle")
        console.log(sumOfAngles)
    }
    else{
        console.log(sumOfAngles)
        console.log("Not A Triangle")
    }
}

checkBtn.addEventListener("click", isTriangle)