const inputScore = document.getElementById("score");
const calculateButton = document.getElementById("calculate-btn");
const resultDisplay = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  const inputScoreNum = parseFloat(inputScore.value);

  if (inputScoreNum < 0 || inputScoreNum > 100) {
    resultDisplay.innerText = "Marks should be between 0-100";
  } else if (inputScoreNum >= 90) {
    resultDisplay.innerText = "A+";
  } else if (inputScoreNum >= 80) {
    resultDisplay.innerText = "A";
  } else if (inputScoreNum >= 70) {
    resultDisplay.innerText = "B+";
  } else if (inputScoreNum >= 60) {
    resultDisplay.innerText = "B";
  } else if (inputScoreNum >= 50) {
    resultDisplay.innerText = "C";
  } else if (inputScoreNum >= 40) {
    resultDisplay.innerText = "D";
  } else {
    resultDisplay.innerText = "F";
  }
});
