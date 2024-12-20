const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
  },
  { id: 3, name: 'Sam Johnson', position: 'Designer', department: 'Design' },
  {
    id: 4,
    name: 'Chris Lee',
    position: 'Data Scientist',
    department: 'Data',
  },
];

const employeeTableBodyElement = document.getElementById('employeeTableBody');

const getEmployeeRow = (employee) => {
  const columns = Object.keys(employee);
  const tableRow = document.createElement('tr');
  tableRow.className = 'hover:bg-gray-100';

  const columnInfo = columns.map(column => {
    const employeeInfo = document.createElement('td');
    employeeInfo.className = 'border px-4 py-2';
    employeeInfo.innerText = employee[column];
    return employeeInfo;
  });

  console.log(columnInfo);

  tableRow.append(...columnInfo);
  return tableRow;
}

const showEmployeeTable = (employees) => {
  employees.forEach(employee => {
    const employeeRow = getEmployeeRow(employee);
    employeeTableBodyElement.appendChild(employeeRow);
  });
}

showEmployeeTable(employeeData);
