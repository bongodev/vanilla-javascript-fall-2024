const employeeData = [
    {
        id: 1,
        name: 'Ahmed Rahman',
        position: 'Software Developer',
        department: 'Engineering',
    },
    {
        id: 2,
        name: 'Mariam Akter',
        position: 'Product Manager',
        department: 'Product',
    },
    {
        id: 3,
        name: 'Rafiul Karim',
        position: 'UI/UX Designer',
        department: 'Design',
    },
    {
        id: 4,
        name: 'Shamim Hasan',
        position: 'Data Analyst',
        department: 'Data',
    },
    {
        id: 5,
        name: 'Farzana Nahar',
        position: 'HR Manager',
        department: 'Human Resources',
    },
];


const employeeTableBody = document.getElementById('employeeTableBody');

const getTableRow = (employee) => {
    const columnData = Object.keys(employee);

    const columns = columnData.map((columndata) => {
        const column = document.createElement('td');
        column.className = 'border px-4 py-2';
        column.innerText = employee[columndata]
        return column;
    });

    const employeeRow = document.createElement('tr');
    employeeRow.className = 'hover:bg-gray-100';
    employeeRow.append(...columns);
    return employeeRow;
};

const appendEmployeeData = (employees) => {
    employees.forEach((employee) => {
        const employeeRow = getTableRow(employee);
        employeeTableBody.appendChild(employeeRow);
    });
};

appendEmployeeData(employeeData);
