const employeeData = [
  {
    id: 1,
    name: "Messi",
    position: "Senior Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Oggy",
    position: "Project Manager",
    department: "Project",
  },
  {
    id: 3,
    name: "Cinderella",
    position: "Data Scientist",
    department: "Data",
  },
  {
    id: 4,
    name: "Elon Musk",
    position: "Senior ML Engineer",
    department: "Machine Learning",
  },
  {
    id: 5,
    name: "Doraemon",
    position: "SQA",
    department: "Quality Assurance",
  },
  {
    id: 6,
    name: "Meena",
    position: "Devops Engineer",
    department: "Devops Engineering",
  },
  {
    id: 7,
    name: "Mr. Bean",
    position: "Business Analyst",
    department: "Business",
  },
  {
    id: 8,
    name: "Loki",
    position: "Cloud Engineer",
    department: "Cloud Computing",
  },
  {
    id: 9,
    name: "Dua Lipa",
    position: "Security Engineer",
    department: "Cyber Security",
  },
  {
    id: 10,
    name: "Mustafizzz",
    position: "Game Developer",
    department: "Game Development",
  },
];

const tBody = document.getElementById("employeeTableBody");

// retriving each employee row

const getEmployeeRow = (employee) => {
  //retriving the keys for each employee
  const columnNames = Object.keys(employee);

  console.log(employee);

  //retriving values of each key for each employee
  const cells = columnNames.map((cellData) => {
    const cell = document.createElement("td");
    cell.classList.add("m-auto", "px-2", "py-3", "text-center");
    cell.innerText = employee[cellData];

    return cell;
  });

  const employeeTableRow = document.createElement("tr");
  employeeTableRow.className = "hover:bg-red-50";
  employeeTableRow.append(...cells);
  return employeeTableRow;
};

// accesing each emplyee in the list
function renderemployeeTable(employees) {
  employees.forEach((employee) => {
    const employeeRow = getEmployeeRow(employee);
    tBody.appendChild(employeeRow);
  });
}

renderemployeeTable(employeeData);
