const employeeData=[
    {
        id:1,
        name:'Dipu',
        position:'SoftWare Engineer',
        department:'Computer',
    },
    
    {
        id:2,
        name:'Alice',
        position:'Product Manager',
        department:'Production',
    },
    {
        id:3,
        name:'Rohan',
        position:'Journalist',
        department:'Journalism',
    },
    {
        id:4,
        name:'Abir',
        position:'Worker',
        department:'Garments',
    },

];
const employeeTableBody=document.getElementById('employeeTableBody');
const getEmployeeRow = (employee) =>{
    const columNames=Object.keys(employee);
    const columns=columNames.map((columnName) =>{
        const column=document.createElement('td');
        column.className = 'border px-4 py-2';
        column.innerText=employee[columnName];
        return column;
        
    });
    const employeeRow=document.createElement('tr');
    employeeRow.className= 'hover:bg-gray-100';
    employeeRow.append(...columns);
    return employeeRow;
}
const renderEmployeeData = (employees) =>{
    employees.forEach((employee) =>{
        const employeeRow=getEmployeeRow(employee);
        employeeTableBody.appendChild(employeeRow);
    });
}
renderEmployeeData(employeeData);
