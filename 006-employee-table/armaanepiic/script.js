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
    department: "Design" },
  {
    id: 4,
    name: "Chris Lee",
    position: "Data Scientist",
    department: "Data",
  },
];

const employeeTableBody = document.getElementById('employeeTableBody');
const getEmployeeRow = (employee) => {
    
}
const renderEmployeeData = (employees) => {
    employees.forEach(employee => {
        const employeeRow = getEmployeeRow(employee);
        employeeTableBody.appendChild(employeeRow);
    });
}

renderEmployeeData(employeeData);