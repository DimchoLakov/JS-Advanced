function addItem() {
    let newItemTextField = document.querySelector('#newItemText');
    let newItemValueField = document.querySelector('#newItemValue');

    let newItemText = newItemTextField.value;
    let newItemValue = newItemValueField.value;

    let newOption = document.createElement('option');
    newOption.textContent = newItemText;
    newOption.value = newItemValue;

    let selectInput = document.querySelector('#menu');
    selectInput.appendChild(newOption);

    newItemTextField.value = '';
    newItemValueField.value = '';
}