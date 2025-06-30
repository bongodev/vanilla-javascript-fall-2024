const numberField = document.getElementById("input-number");
const generateButton = document.getElementById("generate");
const tableBody = document.getElementById("table-body");

generateButton.addEventListener("click", () => {
    const number = numberField.value;
    generateTable(parseInt(number))
})

const generateTable = (number) => {
    // Clear the table before adding new data
    tableBody.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${number}</td>
        <td>x</td>
        <td>${i}</td>
        <td>=</td>
        <td>${number * i}</td>
        `
        tableBody.appendChild(row);
    }
}
