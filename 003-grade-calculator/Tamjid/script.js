
const inputButton = document.getElementById("score");
const calculateButton = document.getElementById("calculate-btn");
const resultButton = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");
const errorButton = document.getElementById("error-message");

function result(){
  let grade = "";
  let borderColor = "";
  let bgColor = "";
let score="";
if(score===""){
  errorButton.innerText="Please enter valid input";
  errorButton.classList.remove("hidden");
  return;
}
score=parseFloat(inputButton.value);
if(score<0 || score>100){
    errorButton.innerText="Please enter valid input";
    errorButton.classList.remove("hidden");
    return;
}
else{
    errorButton.classList.add("hidden"); 
}
  if (score >= 80) {
    grade = "A+";
    borderColor = "border-green-500";
    bgColor = "bg-green-100";
  }
   else if (score >= 75) {
    grade = "A";
    borderColor = "border-green-400";
    bgColor = "bg-green-50";
  }
   else if (score >= 70) {
    grade = "A-";
    borderColor = "border-green-300";
    bgColor = "bg-green-50";
  } 
  else if (score >= 65) {
    grade = "B+";
    borderColor = "border-blue-400";
    bgColor = "bg-blue-100";
  } 
  else if (score >= 60) {
    grade = "B";
    borderColor = "border-blue-300";
    bgColor = "bg-blue-50";
  } 
  else if (score >= 55) {
    grade = "B-";
    borderColor = "border-blue-200";
    bgColor = "bg-blue-50";
  }
   else if (score >= 50) {
    grade = "C+";
    borderColor = "border-yellow-400";
    bgColor = "bg-yellow-100";
  } 
  else if (score >= 45) {
    grade = "C";
    borderColor = "border-yellow-300";
    bgColor = "bg-yellow-50";
  }
   else if (score >= 40) {
    grade = "D";
    borderColor = "border-orange-400";
    bgColor = "bg-orange-100";
  }
   else {
    grade = "F";
    borderColor = "border-red-500";
    bgColor = "bg-red-100";
  }
resultButton.innerText="Your Grade is "+grade;
resultButton.className = "mt-4 text-xl font-bold border-2 rounded-lg " + borderColor + " " + bgColor;

}

function reset(){
    inputButton.value = "";
  resultButton.innerText = "";
  errorButton.innerText = "";
  errorButton.classList.add("hidden");
  resultButton.className = "mt-4 text-xl font-bold";
}

calculateButton.addEventListener('click',result);
resetButton.addEventListener('click',reset);

