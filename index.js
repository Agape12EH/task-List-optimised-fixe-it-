function createTask() {
  var name = document.getElementById("name").value;
  var assignment = document.getElementById("assignment").value;
  var date = document.getElementById("date").value;
  var description = document.getElementById("description").value;

  if (name === "" || assignment === "" || date === "" || description === "") {
    alert("Por favor ingrese todos los campos");
    return;
  }

  var table = document.getElementById("tableTasks");
  var row = table.insertRow(-1);

  var cells = [name, assignment, date, description];

  for (var i = 0; i < cells.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = cells[i];
  }

  document.getElementById("taskForm").reset();
}

function readAndUpdateTask(action) {
  var row = document.getElementById("row" + action).value;
  var table = document.getElementById("tableTasks");

  if (row >= 0 && row < table.rows.length) {
    var rowTable = table.rows[row];

    var fields = ["name", "assignment", "date", "description"];

    for (var i = 0; i < fields.length; i++) {
      var fieldValue = rowTable.cells[i].innerHTML;
      document.getElementById(fields[i] + action).value = fieldValue;
    }
  } else {
    alert("Fila fuera de rango");
  }
}

function updateTask() {
  readAndUpdateTask("Edit");
}

function modifierTask() {
  var rowEdit = document.getElementById("rowEdit").value;
  var table = document.getElementById("tableTasks");

  if (rowEdit >= 0 && rowEdit < table.rows.length) {
    table.deleteRow(parseInt(rowEdit) + 1);
    createTask(); // Reuse the createTask logic to add a new row
  } else {
    alert("Fila fuera de rango");
  }
}
