// Employee data list
const employeeList = [
  {
    id: 1,
    name: 'Ali Imam',
    position: 'Software Engineer',
    department: 'Development',
  },
  {
    id: 2,
    name: 'Nazmul Huda',
    position: 'Product Manager',
    department: 'Product',
  },
  {
    id: 3,
    name: 'Sara Khan',
    position: 'UX Designer',
    department: 'Design',
  },
  {
    id: 4,
    name: 'Alif Rahman',
    position: 'QA Engineer',
    department: 'Quality Assurance',
  },
];

//get the table body element and give a bg-color
const employeeTableBody = document.getElementById('employeeTableBody');
employeeTableBody.classList.add('bg-gray-100');

//Function to generate employee table
function createEmployeeTable() {
  //iterating through the employeeList Array
  employeeList.forEach((employee) => {
    //destructuring the employee object and creating table row
    const { id, name, position, department } = employee;
    const tableRow = document.createElement('tr');

    //Creating table data cells and adding styles
    const cells = [id, name, position, department].map((text) => {
      //Creating table data cell
      const employeeCellData = document.createElement('td');
      employeeCellData.innerText = text;

      //Adding Tailwind CSS classes for styling
      employeeCellData.classList.add(
        'border',
        'border-gray-200',
        'px-4',
        'py-2'
      );
      return employeeCellData;
    });

    //Appending cells to the row and row to the table body
    tableRow.append(...cells);
    tableRow.classList.add('hover:bg-blue-200');
    employeeTableBody.appendChild(tableRow);
  });
}

//Calling the function to create the table
createEmployeeTable();
