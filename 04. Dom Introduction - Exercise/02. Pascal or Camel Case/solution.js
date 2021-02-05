function solve() {
  let text = document.querySelector('#text').value;
  let namingConvention = document.querySelector('#naming-convention').value.trim();

  let result = document.querySelector('#result');
  if (namingConvention.toLowerCase() !== 'Camel Case'.toLowerCase() &&
    namingConvention.toLowerCase() !== 'Pascal Case'.toLowerCase()) {
    result.textContent = 'Error!';
    return;
  }

  let words = text.split(' ').filter(x => x !== '');
  let resultText = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (namingConvention.toLowerCase() === 'Camel Case'.toLowerCase()) {
      if (i === 0) {
        word = word.toLowerCase();
      } else {
        word = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
      }
    } else {
      word = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
    }

    resultText += word;
  }
  result.textContent = resultText;
}