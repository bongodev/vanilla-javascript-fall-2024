const employeeData = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
  },
  { id: 3, name: "Sam Johnson", position: "Designer", department: "Design" },
  {
    id: 4,
    name: "Chris Lee",
    position: "Data Scientist",
    department: "Data",
  },
];
const employeeTableBody = document.getElementById("employeeTableBody");
const getEmployeeRow = (employee) => {
  const columnNames = Object.keys(employee);
  const employeeRow = document.createElement("tr");
  employeeRow.className = "hover:bg-gray-100";
  const columns = columnNames.map((columnName) => {
    const column = document.createElement("td");
    column.className = "border px-4 py-2";
    column.innerText = employee[columnName];
    return column;
  });
  employeeRow.append(...columns);
  return employeeRow;
};

const renderEmployeeDate = (employees) => {
  employees.forEach((employee) => {
    const employeeRow = getEmployeeRow(employee);
    employeeTableBody.appendChild(employeeRow);
  });
};
renderEmployeeDate(employeeData);
