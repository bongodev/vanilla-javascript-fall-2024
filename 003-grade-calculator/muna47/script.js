const calc_btn = document.getElementById("calculate-btn");
const reset_btn = document.getElementById("reset-btn");
const num = document.getElementById("score");
const result = document.getElementById("result");
let res = "";

const errorClass = "border-red-500";
const errorText = "text-red-500";
function reset() {
  num.classList.remove(errorClass);
  result.classList.remove(errorText);
  result.innerText = "";
}

function validInput() {
  reset();
  if (num.value == "") {
    result.innerText = "Enter valid input!!";
    result.classList.add(errorText);
    num.classList.add(errorClass);
    return false;
  } else if (parseInt(num.value) < 0 || parseInt(num.value) > 100) {
    result.innerText = "Enter number between 0 and 100!!";
    result.classList.add(errorText);
    return false;
  }
  return true;
}
calc_btn.addEventListener("click", function () {
  if (!validInput()) {
    return;
  }

  number = parseInt(num.value);
  if (number < 33) res = "F";
  else if (number <= 40) res = "D";
  else if (number <= 50) res = "C";
  else if (number <= 60) res = "B";
  else if (number <= 70) res = "A-";
  else if (number <= 80) res = "A";
  else res = "A+";
  result.innerText = res;
});

reset_btn.addEventListener("click", function () {
  result.innerText = "";
  num.value = "";
});
