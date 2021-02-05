function subtract() {
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);
    
    let result = document.querySelector('#result');
    result.textContent = firstNumber - secondNumber;
}