const employeeData = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      personalInfo:
        {
          address: "NYK, USA",
          father: "John Wick",
          salary: "$2000",
        }
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product",
      personalInfo: 
        {
          address: "LA, USA",
          father: "John Smithn",
          salary: "$2200",
        }
    },
    {
      id: 3,
      name: "Sam Johnson",
      position: "Designer",
      department: "Design",
      personalInfo: 
        {
          address: "Washinton, USA",
          father: "Sam Baly",
          salary: "$2500",
        }
    },
    {
      id: 4,
      name: "Chris Lee",
      position: "Data Scientist",
      department: "Data",
      personalInfo:
        {
          address: "Wahyio, USA",
          father: "Shen Lee",
          salary: "$2000",
        }
    },
  ];
  
  // getEmployeeData.innerText = "Script Connected";
  // const cell1 = document.createElement("td");
  // getEmployeeData.appendChild(cell1);
  // cell1.innerText = "Abu Taher";
  
  const getEmployeeData = document.getElementById("employeeTableBody");
  const getPersonalInfo = document.getElementById("personalInfo");
  
  function showPersonalInfo() {
    const table = document.createElement("table");
    table.className= 'border border-slate-600'
    const headerRow = document.createElement("tr");
    const headers= ['Address', 'Father', 'Salary']
    headers.forEach(header=>{
      const tableHead= document.createElement('th')
      tableHead.innerHTML= header;
      headerRow.appendChild(tableHead)
    });
    table.appendChild(headerRow);
  
    employeeData.forEach((employee) => {
      const { personalInfo } = employee;
  
      personalInfo.forEach((info) => {
        // const { address, father, salary } = info;
        const tableRow= document.createElement('tr')
  
        const addressCell= document.createElement('td');
        addressCell.innerText= info.address;
        addressCell.className='border border-slate-600';
        tableRow.appendChild(addressCell);
  
        const fatherCell= document.createElement('td');
        fatherCell.innerText= info.father;
        tableRow.appendChild(fatherCell);
  
        const salaryCell= document.createElement('td');
        salaryCell.innerText= info.salary;
        tableRow.appendChild(salaryCell);
  
        table.appendChild(tableRow);
        // tableRow.innerText = (`address:${address}, father: ${father}, salary: ${salary}`);
      });
    });
    getPersonalInfo.appendChild(table)
  
  }
  
  function employeeDetails() {
    employeeData.forEach((employee) => {
      const tableRow = document.createElement("tr");
      const cell = document.createElement("td");
      cell.innerText = employee.id;
      tableRow.appendChild(cell);
  
      const cell1 = document.createElement("td");
      cell1.innerText = employee.name;
      tableRow.appendChild(cell1);
  
      const cell2 = document.createElement("td");
      cell2.innerText = employee.position;
      tableRow.appendChild(cell2);
  
      const cell3 = document.createElement("td");
      cell3.innerText = employee.department;
      tableRow.appendChild(cell3);
  
      const cell4 = document.createElement("td");
      const link = document.createElement("a");
      // link.href = ("https://www.w3schools.com/", target= "_blank");
      link.href ="#"
  
      link.innerText = "Click Here";
      cell4.appendChild(link);
      tableRow.appendChild(cell4);
  
      // const cell4 = document.createElement("td");
      // cell4.innerText = showPersonalInfo();
      // tableRow.appendChild(cell4);
  
      getEmployeeData.appendChild(tableRow);
    });
  }
  
  // const renderEmployeeData = () => {
  //   employeeDetails();
  // };
  
  employeeDetails(employeeData);