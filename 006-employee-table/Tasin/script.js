const employeeData =[
    //Jason format
    {
        id:1,
        name:"Tasin",
        age:24,
        position:"Software Engineer",
        department:"IT",
    },
    {
        id:2,
        name:"John",
        age:30,
        position:"Product Manager",
        department:"Product",
    },
    {
        id:3,
        name:"Tony Stark",
        age:45,
        position:"CEO",
        department:"Robotics",
    },
    {
        id:4,
        name:"Natasha",
        age:35,
        position:"HR Manager",
        department:"Human Resource",
    },
    {
        id:5,
        name:"Ibn Sina",
        age:50,
        position:"Doctor",
        department:"Medical",
    }
];

const employeeTableBody=document.getElementById("employeeTableBody");

const getEmployeeRow = (employee) => {
    const columnNames=Object.keys(employee);
    const columns =columnNames.map((columnName)=>{
        const column=document.createElement('td');
        column.className="border px-4 py-2";
        column.innerText=employee[columnName];
        return column;
    });

    const employeeRow=document.createElement('tr');
    employeeRow.className='hover:bg-gray-100';
    employeeRow.append(...columns);

    return employeeRow;
};

const renderEmployeeData=(employees)=>{
    employees.forEach((employee) => {
        const employeeRow=getEmployeeRow(employee);
        employeeTableBody.appendChild(employeeRow);
    });
};

renderEmployeeData(employeeData);