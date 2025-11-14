const employeeData = [
  {
    id: 1,
    name: "John Wick",
    position: "Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Mary Jane",
    position: "Product Manager",
    department: "Product",
  },
  { id: 3, name: "Sam Wilson", position: "Designer", department: "Design" },
  {
    id: 4,
    name: "Bruce Lee",
    position: "Data Scientist",
    department: "Data",
  },
  {
    id: 5,
    name: "Alex Pereira",
    position: "Marketing Specialist",
    department: "Marketing",
  },
  {
    id: 6,
    name: "David Beckham",
    position: "Sales Executive",
    department: "Sales",
  },
  {
    id: 7,
    name: "Chen Lee",
    position: "Financial Analyst",
    department: "Finance",
  },
  {
    id: 8,
    name: "James Gun",
    position: "Project Manager",
    department: "Project Management",
  },
  {
    id: 9,
    name: "Kevin Levin",
    position: "Customer Support",
    department: "Support",
  },
];

const employeeTableBody = document.getElementById("employeeTableBody");

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

const renderEmployeeData = (employees) => {
  employees.forEach((employee) => {
    const employeeRow = getEmployeeRow(employee);
    employeeTableBody.appendChild(employeeRow);
  });
};

renderEmployeeData(employeeData);
