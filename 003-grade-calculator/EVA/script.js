const score = document.getElementById("score");
const error_msg= document.getElementById("error-message");
const calculate = document.getElementById("calculate");
const reset  = document.getElementById("reset");
const result  = document.getElementById("result");

calculate.addEventListener('click' , calculateGrade);
 
function calculateGrade () {

    const scoreValue = score.value.trim();
    const Score = parseFloat(scoreValue);
    
    error_msg.innerText="";
    error_msg.classList.add("hidden");

    if(!score.value)
    {
        error_msg.innerText="Enter a valid number";
        error_msg.classList.remove("hidden");
        result.innerText="";
        return ;
    }

    if(Score<0 || Score>100)
    {
        error_msg.innerText="Score must be in between 0 to 100";
        result.innerText="";
        error_msg.classList.remove("hidden");
        return ;
    }

    if(Score>=80)
        result.innerText="+A";
    else if (Score >= 70) {
        result.innerText = "A"
    }
    else if (Score >= 60) {
        result.innerText = "A-"
    }
    else if (Score >= 50) {
        result.innerText = "B"
    }
    else if (Score >= 40) {
        result.innerText = "C"
    }
    else if (Score >= 33) {
        result.innerText = "D"
    }
    else {
        result.innerText = "F"
        result.style.color = "red"
    }


}

reset.addEventListener('click', function(){

    score.value="";
    result.innerText="";
    error_msg.innerText="";
    error_msg.classList.add("hidden");

})


