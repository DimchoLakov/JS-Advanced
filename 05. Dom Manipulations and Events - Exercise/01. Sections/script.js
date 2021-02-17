function create(words) {
    let contentDiv = document.querySelector('#content');

    for (const word of words) {
        let div = document.createElement('div');

        let p = document.createElement('p');
        p.style.display = 'none';
        p.textContent = word;

        div.appendChild(p);

        div.addEventListener('click', function (event) {
            let childP = event.target.querySelector('p');
            childP.style.display = 'block';
        });

        contentDiv.appendChild(div);
    }
}