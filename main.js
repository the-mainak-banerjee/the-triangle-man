const angleInputs = document.querySelectorAll(".angleInputs")
const checkBtn = document.querySelector("#checkBtn")
const showOutput = document.querySelector("#showOutput")


function calculateSumOfAngles(angle) {
    return Number(angle[0].value) + Number(angle[1].value)  + Number(angle[2].value);
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