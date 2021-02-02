function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let result = [...listItems]
        .map(x => x.textContent)
        .join('\n');

    document
        .querySelector('#result')
        .textContent = result;
}