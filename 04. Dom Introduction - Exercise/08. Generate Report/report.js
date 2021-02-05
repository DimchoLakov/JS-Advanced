function generateReport(colNames) {
    let allInputs = document.querySelectorAll('thead input');

    let checkedInputs = [];
    let index = 0;
    for (const input of allInputs) {
        if (input.checked) {
            checkedInputs.push({
                inputName: input.getAttribute('name'),
                index: index
            });
        }
        index++;
    }

    let report = [];

    let rows = document.querySelectorAll('tbody tr');
    for (const row of rows) {
        let currentRow = {};
        
        for (const checkedInput of checkedInputs) {
            currentRow[checkedInput.inputName] = row.cells[checkedInput.index].textContent;
        }

        if (Object.keys(currentRow).length !== 0) {
            report.push(currentRow);            
        }
    }

    let outputDiv = document.querySelector('#output');
    let result = JSON.stringify(report);
    outputDiv.value = result;
}