const scoreInput = document.getElementById('score')
const resultDiv = document.getElementById('result')
const calculateButton = document.getElementById('calculate')
const resetButton = document.getElementById('reset')
const errorMessage = document.getElementById('error-message')


calculateButton.addEventListener('click', function () {
    let Score = parseFloat(scoreInput.value)
    
    errorMessage.innerText = ""
    errorMessage.classList.add("hidden")

    if (isNaN(Score)) {
       
        errorMessage.innerText = "Please enter a valid number!"
        errorMessage.classList.remove("hidden")
        resultDiv.innerText = ""
        return;
    }
    if (Score < 0 || Score > 100) {
        errorMessage.innerText = "Score must be between 0 and 100"
        errorMessage.classList.remove("hidden")
        resultDiv.innerText = ""
        return;
    }
    if (Score >= 80) {
        resultDiv.innerText = "A+"
    }
    else if (Score >= 70) {
        resultDiv.innerText = "A"
    }
    else if (Score >= 60) {
        resultDiv.innerText = "A-"
    }
    else if (Score >= 50) {
        resultDiv.innerText = "B"
    }
    else if (Score >= 40) {
        resultDiv.innerText = "C"
    }
    else if (Score >= 33) {
        resultDiv.innerText = "D"
    }
    else {
        resultDiv.innerText = "F"
        resultDiv.style.color = "red"
    }


})

resetButton.addEventListener('click', function () {
    scoreInput.value = ""
    resultDiv.innerText = ""
    errorMessage.innerText = ""
    errorMessage.classList.add("hidden")
})