const employeedata= [
    {id :1,
        name: 'Sakib',
        position : 'Software Engineer',
        department : 'Engineering'
    },
    {
        id : 2,
        name : 'Farhan',
        position: 'Product Manager',
        department: 'Product'
    },
    {
        id : 3,
        name : 'Nafis',
        position : 'Data Scientist',
        department : 'Data'

    },
    {
        id : 4,
        name : 'Jesan',
        position : 'UX Researcher',
        department : 'Researcher'
    },
    {
        id: 5,
        name : 'Aung',
        position :'Devops Engineer',
        department:'Operation '
    },
    {
        id : 6,
        name : 'Kabir',
        position :'Marketing Manager',
        department : 'Marketing'
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

const employeeTableBody=document.getElementById("employeeTableBody");

const getEmployeeRow=(employee)=>
{
    const columnNames=Object.keys(employee);
    const columns= columnNames.map((columnname)=>
    {
       const column= document.createElement('td');
       column.className = 'border px-4 py-2';
       column.innerText= employee[columnname];
       return column;
    });
    const employeeRow=document.createElement('tr');
    employeeRow.className= 'hover:bg-gray-100';
    employeeRow.append(...columns);
    return employeeRow;
}
const renderEmployeeData=(employees)=>
{
   employees.forEach((employee)=>
{
   const employeeRow=getEmployeeRow(employee);
   employeeTableBody.appendChild(employeeRow);
});
}
renderEmployeeData(employeedata);
