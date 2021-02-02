function edit(ref, match, replacer) {
    const textContenxt = ref.textContenxt;
    const regex = new RegExp(match, 'g');
    const modified = textContenxt.replace(regex, replacer);
    ref.textContenxt = modified;
}

function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
  }
  