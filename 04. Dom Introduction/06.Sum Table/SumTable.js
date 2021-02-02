function sumTable() {
    let tds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let sum = 0;
    for (let i = 0; i < tds.length - 1; i++) {
        sum += Number(tds[i].textContent);
    }
    tds[tds.length - 1].textContent = sum;
}