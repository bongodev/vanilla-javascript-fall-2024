const inputElement = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableContainer = document.getElementById("table-container");
const tableBody = document.getElementById("table-body");
const errorElement = document.getElementById("error");

generateBtn.addEventListener("click", function () {
  reset();
  const number = inputElement.value;
  if (!number) {
    showError();
    return;
  }
  resetError();
  generateTable(Number(number));
});

function generateTable(number) {
  reset();
  for (let i = 1; i <= 10; i++) {
    tableBody.appendChild(row(number, i, number * i));
  }
}
function showError() {
  errorElement.textContent = "Please provide a number";
  inputElement.classList.add("border-red-500");
}
function resetError() {
  errorElement.textContent = "";
  inputElement.classList.remove("border-red-500");
}
function reset() {
  tableBody.innerHTML = "";
}
function row(number, factor, result) {
  const tr = document.createElement("tr");
  tr.classList.add(
    "font-bold",
    "text-xl",
    "text-slate-200",
    "even:bg-gray-800",
    "odd:bg-gray-900"
  );
  tr.innerHTML = `
    <td>${number}</td>
    <td>x</td>
    <td>${factor}</td>
    <td>=</td>
    <td>${result}</td>
    `;
  return tr;
}
