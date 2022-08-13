let tableBody;

window.onload = () => {
  tableBody = document.getElementById("tableBody");

  // Without Using Async and Await
  // fetch("/getJsonData").then((response) => {
  //   response.json().then((res) => {
  //     console.log(res);
  //   });
  // });

  // Using Async and Await
  async function loadData() {
    const response = await fetch("/getJsonData");
    const tableData = await response.json();
    console.log(tableData);
    updateTable(tableData);
    updateColor();
  }
  loadData();
};

const updateTable = (tableData) => {
  tableData.forEach((data) => {
    const newTableRow = document.createElement("tr");
    const rowData = `<td colspan="3">${data.machine_name}</td>
      <td colspan="2">${data.machine_id}</td>
      <td>${data.daily_energy}</td>
      <td>${data.monthly_energy}</td>
      <td>${data.yearly_energy}</td>
      <td colspan="2">${data.active_power}</td>
      <td colspan="2">${data.apparent_power}</td>
      <td colspan="2">${data.reactive_power}</td>
      <td colspan="2">${data.current}</td>
      <td colspan="2">${data.voltage}</td>
      <td colspan="2">${data.power_factor}</td>
      <td>${data.idle_daily}</td>
      <td>${data.idle_monthly}</td>
      <td>${data.idle_yearly}</td>`;

    newTableRow.innerHTML = rowData;

    tableBody.appendChild(newTableRow);
  });
};

const updateColor = () => {};
