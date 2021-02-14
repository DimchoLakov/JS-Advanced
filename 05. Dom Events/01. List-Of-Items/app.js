function addItem() {
    let inputText = document.querySelector('#newItemText').value;
    // items
    let li = document.createElement('li');
    li.textContent = inputText;

    document.querySelector('#items').appendChild(li);
}