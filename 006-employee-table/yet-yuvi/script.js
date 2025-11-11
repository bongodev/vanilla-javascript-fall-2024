// An array of employee objects.
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

// Get the <tbody> element from the HTML.
const employeeTableBody = document.getElementById("employeeTableBody");

// Creates a single table row (<tr>) for one employee.
const getEmployeeRow = (employee) => {
  const columnNames = Object.keys(employee);

  const columns = columnNames.map((columnName) => {
    const column = document.createElement("td");
    column.className = "border px-4 py-2";
    column.innerText = employee[columnName];
    return column;
  });

  const employeeRow = document.createElement("tr");
  employeeRow.className = "hover:bg-gray-100";
  employeeRow.append(...columns);

  return employeeRow;
};

// Renders all employees into the HTML table body.
const renderEmployeeData = (employees) => {
  employees.forEach((employee) => {
    const employeeRow = getEmployeeRow(employee);
    employeeTableBody.appendChild(employeeRow);
  });
};

// Calls the function to build the table on page load.
renderEmployeeData(employeeData);
