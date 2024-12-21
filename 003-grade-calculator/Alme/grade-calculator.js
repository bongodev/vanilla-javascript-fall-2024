const user_input = document.getElementById("score");
const calculation = document.getElementById("calculate-btn");
const result_button = document.getElementById("result");
const reset_button = document.getElementById("reset-btn");

const Error_msg = "border-red-700";

function Error_detection() {
  user_input.classList.remove(Error_msg);
  return;
}

function isvalidnumber() {
  Error_detection();
  if (!user_input.value) {
    user_input.classList.add(Error_msg);

    return false;
  }

  return true;
}
calculation.addEventListener("click", function () {
  if (!isvalidnumber()) {
    return;
  }
  const score = parseFloat(user_input.value);

  if (score >= 0 && score <= 100) {
    const grade = calculategrade(score);
    result_button.innerText = grade;
  } else {
    result_button.innerText = "Marks Should be Between 0 to 100";
    alert("You Have entered an invalid marks");
  }
});

function calculategrade(score) {
  let grade = "";
  if (score >= 80 && score <= 100) {
    grade = " Grade:  A+ ";
  } else if (score >= 70 && score <= 79) {
    grade = " Grade: A ";
  } else if (score >= 60 && score <= 69) {
    grade = " Grade: A-";
  } else if (score >= 50 && score <= 59) {
    grade = " Grade: B";
  } else if (score >= 40 && score <= 49) {
    grade = " Grade: B-";
  } else if (score >= 33 && score <= 39) {
    grade = " Grade: D";
  } else {
    grade = " Grade: F.... Better luck next time !!!";
  }
  return grade;
}

reset_button.addEventListener("click", function () {
  Error_detection();
  user_input.value = "";
  result_button.innerText = "";
});
 