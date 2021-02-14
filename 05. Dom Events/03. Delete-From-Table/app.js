function deleteByEmail() {
    let textToSearchFor = document.querySelector('input[name="email"]').value.trim();
    let tds = document.querySelectorAll('tbody td:nth-child(even)');

    let result = document.querySelector('#result');

    for (const td of tds) {
        if (td.textContent === textToSearchFor) {
            td.parentNode.remove();
            result.innerText = 'Deleted';
            return
        }
    }

    result.textContent = 'Not found.';
}