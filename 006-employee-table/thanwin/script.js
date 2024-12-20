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

const employeeTable = document.getElementById('employeeTableBody');

const renderEmployeeTable = (datas) => {
  datas.forEach((data) => {
    const employeeRow = getEmployeeRow(data);
    employeeRow.classList.add('hover:bg-gray-200');
    employeeTable.appendChild(employeeRow);
  });
};
function getEmployeeRow(data) {
  const columnNames = Object.keys(data);
  const rowElement = document.createElement('tr');
  columnNames.forEach((key) => {
    const tdElement = document.createElement('td');
    tdElement.classList.add('p-4', 'border');
    tdElement.textContent = data[key];
    rowElement.appendChild(tdElement);
  });
  return rowElement;
}
renderEmployeeTable(employeeData);
