const inputNumber = document.getElementById("score");
const calculatebtn = document.getElementById("calculate-btn");
const resulti = document.getElementById("result");
const reset = document.getElementById("reset-btn");

const Error_msg = "border-red-500";

function resetHover() {
  calculatebtn.style.backgroundColor = "";
  reset.style.backgroundColor = "";
}
calculatebtn.addEventListener("mouseover", function () {
  calculatebtn.style.backgroundColor = "#4CAF50";
  calculatebtn.style.color = "white";
});

calculatebtn.addEventListener("mouseout", function () {
  resetHover();
});

reset.addEventListener("mouseover", function () {
  reset.style.backgroundColor = "#4CAF50";
  reset.style.color = "white";
});

reset.addEventListener("mouseout", function () {
  resetHover();
});

function Error_detection() {
  inputNumber.classList.remove(Error_msg);

  return;
}

function isvalidnumber() {
  Error_detection();
  if (!inputNumber.value) {
    inputNumber.classList.add(Error_msg);

    return false;
  }

  return true;
}
calculatebtn.addEventListener("click", function () {
  if (!isvalidnumber()) {
    return;
  }
  const score = parseFloat(inputNumber.value);

  if (score >= 0 && score <= 100) {
    const grade = calculategrade(score);
    resulti.innerText = grade;
  } else {
    resulti.innerText = "Marks Should be Between 0 to 100";
    alert("You Have entered an invalid marks");
  }
});

function calculategrade(score) {
  let grade = "";
  if (score >= 80 && score <= 100) {
    grade = "Your Grade is  A+ ";
  } else if (score >= 70 && score <= 79) {
    grade = "Your Grade is A ";
  } else if (score >= 60 && score <= 69) {
    grade = "Your Grade is A-";
  } else if (score >= 50 && score <= 59) {
    grade = "Your Grade is B";
  } else if (score >= 40 && score <= 49) {
    grade = "Your Grade is B";
  } else if (score >= 33 && score <= 39) {
    grade = "Your Grade is D";
  } else {
    grade = " Sorry!!! You have Failed in the exam !!!";
  }
  return grade;
}

reset.addEventListener("click", function () {
  Error_detection();
  inputNumber.value = "";
  resulti.innerText = "";
});
 