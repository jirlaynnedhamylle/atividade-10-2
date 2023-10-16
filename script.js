function js_add_rows() {
    var numRowsInput = document.getElementById('txtNumRows');
    var numRows = parseInt(numRowsInput.value);

    var sampleTable = document.getElementById('sampleTable');

    if (isNaN(numRows) || numRows < 1 || numRows > 10) {
        alert("Valores válidos são entre 1 e 10.");
    } else {
        for (var i = 0; i < numRows; i++) {
            var newRow = sampleTable.insertRow(-1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.innerHTML = 'Nova Linha cell1';
            cell2.innerHTML = 'Nova Linha cell2';
        }

        numRowsInput.value = '';
    }
}
