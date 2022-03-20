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