const employeeData = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering'
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Product Manager',
        department: 'Product'
    },
    { id: 3, name: 'Sam Johnson', position: 'Designer', department: 'Design' },
    {
        id: 4,
        name: 'Chris Lee',
        position: 'Data Scientist',
        department: 'Data'
    },
    {
        id: 5,
        name: 'Lisa Patel',
        position: 'UX Researcher',
        department: 'Research'
    },
    {
        id: 6,
        name: 'Michael Brown',
        position: 'DevOps Engineer',
        department: 'Operations'
    },
    {
        id: 7,
        name: 'Emily Davis',
        position: 'Marketing Specialist',
        department: 'Marketing'
    },
    {
        id: 8,
        name: 'David Wilson',
        position: 'Sales Executive',
        department: 'Sales'
    }
];

const employeeTableBody = document.getElementById('employeeTableBody');

const getEmployeeRow = (employee) => {
    const columnName = Object.keys(employee);
    const columns = columnName.map((columnName) => {
        const column = document.createElement('td');
        column.className = 'border px-4 py-2';
        column.innerText = employee[columnName];
        return column;
    });

    const editButton = document.createElement('button');
    editButton.className = 'bg-blue-500 text-white px-4 py-2 rounded';
    editButton.innerText = 'Edit';
    editButton.onclick = () => editEmployee(employee.id);
    const editColumn = document.createElement('td');
    editColumn.className = 'border px-4 py-2';
    editColumn.appendChild(editButton);
    columns.push(editColumn);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'bg-red-500 text-white px-4 py-2 rounded';
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => {
        if (confirm(`Are you sure you want to delete ${employee.name}?`)) {
            employeeTableBody.removeChild(employeeRow);
        }
    };
    const deleteColumn = document.createElement('td');
    deleteColumn.className = 'border px-4 py-2';
    deleteColumn.appendChild(deleteButton);
    columns.push(deleteColumn);

    // const addButton = document.createElement('button');
    // addButton.className = 'bg-green-500 text-white px-4 py-2 rounded';
    // addButton.innerText = 'Add Employee';       
    // addButton.onclick = addEmployee;
    // const addColumn = document.createElement('td');
    // addColumn.className = 'border px-4 py-2';
    // addColumn.appendChild(addButton);
    // columns.push(addColumn);
    
    
    const employeeRow = document.createElement('tr');
    employeeRow.className = 'hover:bg-gray-100';
    employeeRow.append(...columns);
    return employeeRow;
}

const renderEmployeeData = (employees) => {
    employees.forEach((employee=> {
        const employeeRow = getEmployeeRow(employee);
        employeeTableBody.appendChild(employeeRow);
    }));
}

renderEmployeeData(employeeData);

const editEmployee = (id) => {
    const employee = employeeData.find(emp => emp.id === id);
    if (employee) {
        const newName = prompt('Enter new name:', employee.name);
        const newPosition = prompt('Enter new position:', employee.position);
        const newDepartment = prompt('Enter new department:', employee.department);

        if (newName && newPosition && newDepartment) {
            employee.name = newName;
            employee.position = newPosition;
            employee.department = newDepartment;

            // Clear the table and re-render
            employeeTableBody.innerHTML = '';
            renderEmployeeData(employeeData);
        }
    } else {
        alert('Employee not found!');
    }
}


const addButton = document.getElementById('addEmployeeBtn');
addButton.addEventListener('click', addEmployee);

// Add event listener for the "Add Employee" button
function addEmployee() {
    const newName = prompt('Enter name:');
    const newPosition = prompt('Enter position:');
    const newDepartment = prompt('Enter department:');

    if (newName && newPosition && newDepartment) {
        const newId = employeeData.length ? employeeData[employeeData.length - 1].id + 1 : 1;
        const newEmployee = {
            id: newId,
            name: newName,
            position: newPosition,
            department: newDepartment
        };
        employeeData.push(newEmployee);

        // Clear the table and re-render
        employeeTableBody.innerHTML = '';
        renderEmployeeData(employeeData);
    } else {
        alert('All fields are required!');
    }
}