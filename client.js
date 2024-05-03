onReady();

function onReady() {
  console.log('Javascript is running!');
}

function addEmployee(event) {
  event.preventDefault();
  //   const submitButton = document.getElementById('submit-button');
  //   submitButton = event.target;
  console.log('Submit');
  const table = document.getElementById('table-body');
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const ID = document.getElementById('i-d').value;
  const title = document.getElementById('title').value;
  const annualSalary = document.getElementById('annual-salary').value;
  table.innerHTML += `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button onclick="removeEmployee(event)">Delete</button></td>
  </tr>
  `;
  document.getElementById('salary-form').reset();
}

function removeEmployee(event) {
  event.target.closest('tr').remove();
}
