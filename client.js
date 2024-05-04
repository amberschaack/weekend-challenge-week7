onReady();

function onReady() {
  console.log('Javascript is running!');
}

let employees = [];

function addEmployee(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const ID = document.getElementById('i-d').value;
  const title = document.getElementById('title').value;
  const annualSalary = Number(document.getElementById('annual-salary').value);

  const newEmployee = {
    firstName,
    lastName,
    ID,
    title,
    annualSalary,
  };

  employees.push(newEmployee);

  renderEmployees();
  calculateMonthlySalary();
  document.getElementById('salary-form').reset();
}

function renderEmployees() {
  const table = document.getElementById('table-body');
  table.innerHTML = '';
  for (let i = 0; i < employees.length; i++) {
    table.innerHTML += `
    <tr>
      <td>${employees[i].firstName}</td>
      <td>${employees[i].lastName}</td>
      <td>${employees[i].ID}</td>
      <td>${employees[i].title}</td>
      <td>$${employees[i].annualSalary}</td>
      <td><button id=${i} onclick="removeEmployee(event)">Delete</button></td>
     </tr>
    `;
  }
}

function removeEmployee(event) {
  const removeButton = event.target.id;
  employees.splice(Number(removeButton), 1);
  renderEmployees();
  calculateMonthlySalary();
}

function calculateMonthlySalary() {
  let total = 0;
  for (const employee of employees) {
    total += Math.ceil(employee.annualSalary / 12);
  }
  console.log(total);
  const monthlyElement = document.getElementById('total-monthly');
  //   monthlyElement.innerText = `Total Monthly: $${total}`;
  if (total > 20000) {
    monthlyElement.innerHTML = `<h2 class="high">Total Monthly: $${total}</h2>`;
  } else {
    monthlyElement.innerText = `Total Monthly: $${total}`;
  }
}
