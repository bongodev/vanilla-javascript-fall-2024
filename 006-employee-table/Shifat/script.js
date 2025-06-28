const employeeData = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
  },
  { id: 3, name: "Sam Johnson", position: "Designer", department: "Design" },
  {
    id: 4,
    name: "Chris Lee",
    position: "Data Scientist",
    department: "Data",
  },
];

const tableBody = document.getElementById("employeeTableBody");

employeeData.map((d) => {
  const tr = document.createElement("tr");
  tr.classList.add("hover:bg-gray-100");
  COLUMN_DESIGN = "border px-4 py-2";
  tr.innerHTML = `
    <td class="${COLUMN_DESIGN}">${d.id}</td>
    <td class="${COLUMN_DESIGN}">${d.name}</td>
    <td class="${COLUMN_DESIGN}">${d.position}</td>
    <td class="${COLUMN_DESIGN}">${d.department}</td>
  `;
  tableBody.appendChild(tr);
});
