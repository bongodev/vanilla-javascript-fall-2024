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
  {
    id: 3,
    name: "Sam Johnson",
    position: "Designer",
    department: "Design",
  },
  {
    id: 4,
    name: "Chris Lee",
    position: "Data Scientist",
    department: "Data",
  },
];

const employeeTableBody = document.getElementById("employeeTableBody");
const getEmployeeRow = (employee) => {
  const colNames = Object.keys(employee);
  const columns = colNames.map((columnName) => {
    const column = document.createElement("td");
    column.className = "border border-2 py-8 px-4";
    column.innerText = employee[columnName];
    return column;
  });
  const employeeRow = document.createElement("tr");
  employeeRow.className = "hover:bg-gray-200 text-center";
  employeeRow.append(...columns);
  return employeeRow;
};
const renderEmployeeData = (employees) => {
  employees.forEach((employee) => {
    const employeeRow = getEmployeeRow(employee);
    employeeTableBody.appendChild(employeeRow);
  });
};

renderEmployeeData(employeeData);
