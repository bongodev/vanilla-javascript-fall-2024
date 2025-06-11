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
const tableBody = document.getElementById('employeeTableBody');

function renderTable(dataOfEmployee) {
  dataOfEmployee.forEach((employee) => {
    const tableRow = document.createElement('tr');
    tableRow.className = 'hover:bg-gray-100';
    Object.keys(employee).forEach((value) => {
      const tableColumn = document.createElement('td');
      tableColumn.innerText = employee[value];
      tableColumn.className = 'border px-4 py-2';
      tableRow.appendChild(tableColumn);
    });
    tableBody.appendChild(tableRow);
  });
}

renderTable(employeeData);
