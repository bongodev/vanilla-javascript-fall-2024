const score = document.getElementById("score");
const errorMessage = document.getElementById("error-message");
const calculateBtn = document.querySelector("#calculate-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");




calculateBtn.addEventListener("click", function(){
    const value = score.value
    const grade = calculateGrade(value)
    
    if (!value){
        result.textContent = "Please enter a score"
        return
    }
    if (grade.includes('Not')){
        result.textContent = "Please enter a valid score."
        score.classList.add('border-2', 'border-red-300', "focus:outline-none", "focus:border-red-400")
        
    }
    else {
        score.classList.remove('border-2', 'border-red-300', "focus:outline-none", "focus:border-red-400")
        result.textContent = `Your grade is ${grade}`
    }
    
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset(){
    score.classList.remove('border-2', 'border-red-300', "focus:outline-none", "focus:border-red-400")
    score.value = null
    result.textContent = null
}

function calculateGrade(marks){
    if (marks >= 90 && marks <= 100){
        return 'A'
    }
    else if (marks >= 80 && marks <= 89){
        return 'B'
    }
    else if (marks >= 70 && marks <= 79){
        return 'C'
    }
    else if (marks >= 60 && marks <= 69){
        return 'D'
    } else if (marks >= 0 && marks <= 59){
        return 'F'
    } else {
        return 'Not Valid Score'
    }
}