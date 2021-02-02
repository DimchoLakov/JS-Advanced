function extract() {
    let content = document.querySelector('#content');
    let matches = content.textContent.match(/\(([^\)]+)\)/gmi);
    let arr = [];

    for (const match of matches) {
        let matchContent = match.split(/\(([^\)]+)\)/gmi).filter(x => x !== '');
        arr.push(matchContent);
    }

    return arr.join('; ');
}