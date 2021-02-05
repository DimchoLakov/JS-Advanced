function toggle() {
    let span = document.querySelector('span.button');
    let spanContentToLowerCase = span.textContent.toLowerCase();
    let extraDiv = document.querySelector('#extra');
    if (spanContentToLowerCase === 'more') {
        extraDiv.style.display = 'block';
        span.textContent = 'Less';
    } else if (spanContentToLowerCase === 'less') {
        extraDiv.style.display = 'none';
        span.textContent = 'More';
    }
}