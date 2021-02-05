function solve() {
  let text = document.querySelector('#input').value;
  let sentences = text.split('.').filter(x => x !== '');

  let outputDiv = document.querySelector('#output');

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphArr = [];

    for (let k = 0; k < 3; k++) {
      if (sentences[i + k]) {
        paragraphArr.push(sentences[i + k]);
      }
    }

    let paragraphContent = paragraphArr.join('. ') + '.';
    outputDiv.innerHTML += `<p>${paragraphContent}</p>`;
  }
}