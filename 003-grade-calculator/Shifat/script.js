const score = document.getElementById("score");
const calculateButton = document.getElementById("calculate-btn");
const resetButton = document.getElementById("reset-btn");
const result = document.getElementById("result");

const ERROR_CLASS = "border-red-500";

calculateButton.addEventListener("click", function () {
    const scoreValue = score.value;
    const getGrade = findGrade(parseFloat(scoreValue));

    if (getGrade.toLowerCase() === "invalid score") {
        showResult(getGrade);
    } else {
        showResult(`Grade: ${getGrade}`);
    }
})

resetButton.addEventListener("click", function () {
    resetField();
})

const showResult = (grade) => {
    result.innerText = grade;
}

const findGrade = (scoreValue) => {
    if (scoreValue > 100 || scoreValue < 0) {
        score.classList.add(ERROR_CLASS);
        return "Invalid Score";
    } else {
        score.classList.remove(ERROR_CLASS);
        if (scoreValue >= 80 && scoreValue <= 100) {
            return "A+";
        } else if (scoreValue >= 70 && scoreValue < 80) {
            return "A";
        } else if (scoreValue >= 60 && scoreValue < 70) {
            return "A-";
        } else if (scoreValue >= 50 && scoreValue < 60) {
            return "B";
        } else if (scoreValue >= 40 && scoreValue < 50) {
            return "C";
        } else if (scoreValue >= 33 && scoreValue < 40) {
            return "D";
        } else {
            return "F";
        }
    }
}

const resetField = () => {
    score.value = '';
    score.classList.remove(ERROR_CLASS);
    showResult('');
}

