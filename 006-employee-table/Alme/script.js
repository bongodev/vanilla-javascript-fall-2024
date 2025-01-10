// 1. Define the data first (this is the "employeeData")
const employeeData = [
    { id: 1, name: 'Busrana', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Alme', position: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Farisi', position: 'Designer', department: 'Design' },
    { id: 4, name: 'Alif', position: 'Data Scientist', department: 'Data' },
  ];
  
  // 2. Now define your functions (the actual behavior of creating rows)
  const getEmployeeRow = (employee) => {
    const columnNames = Object.keys(employee);  // Get ['id', 'name', 'position', 'department']
    
    // Create <td> elements for each key in the employee object.
    const columns = columnNames.map((columnName) => {
      const column = document.createElement('td');  // Create a new <td> element
      column.className = 'border px-4 py-2';  // Add some classes for styling
      column.innerText = employee[columnName];  // Set the column's text to the employee's property value
      return column;  // Return the <td> element
    });
    
    const employeeRow = document.createElement('tr');  // Create the table row (<tr>)
    employeeRow.className = 'hover:bg-gray-100';  // Add a class for hover effect
    
    // Append all the <td> elements (columns) to the row.
    employeeRow.append(...columns);  // Spread syntax to append all <td>s at once
    
    return employeeRow;  // Return the row with all <td> elements
  };
  
  const renderEmployeeData = (employees) => {
    employees.forEach((employee) => {
      const employeeRow = getEmployeeRow(employee);
      employeeTableBody.appendChild(employeeRow);
    });
  };
  
  // 3. Finally, call the function to render the table with data
  renderEmployeeData(employeeData);
  