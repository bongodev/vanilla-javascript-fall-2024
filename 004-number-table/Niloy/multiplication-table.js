const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");

const generatedBtnHandler = () => {
  const num = parseInt(numberInput.value);
  //tableBody.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = `<tr>
              <td>${num}</td>
              <td>x</td>
              <td>${i}</td>
              <td>=</td>
              <td>${num * i}</td>
        </tr>`;
        tableBody.innerHTML+=row;
  }
};

generateBtn.addEventListener("click", generatedBtnHandler);
