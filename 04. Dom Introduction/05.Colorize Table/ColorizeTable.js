function colorize() {
    let rows = document.querySelectorAll('table tr:nth-child(n + 2)');
    let index = 0
    for (const row of rows) {
        if (index % 2 === 0) {
            row.style.background = 'teal';
        }
        index++;
    }
}