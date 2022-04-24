// api url
const api_url = "https://62649b1794374a2c5068127a.mockapi.io/Data";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
  var tab = document.getElementById("table");
  tab = `<tr>
		<th>Id</th>
		<th>Date</th>
		<th>Todo</th>
		<th>Status</th>
		</tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr>
	<td class="id">${r.id} </td>
	<td class="date">${r.date}</td>
	<td class="title">${r.title}</td>
	<td class="status">${r.status}</td>		
    </tr>`;
  }

  // Setting innerHTML as tab variable
  document.getElementById("data").innerHTML = tab;
}

function takevalue() {
  var Todo = document.getElementById("todo").value;
  var d = new Date();
  var status = "In-Progress";

  document.write(Todo + "__");
  document.write(d.toDateString() + "__" );
  document.write(status);
}
