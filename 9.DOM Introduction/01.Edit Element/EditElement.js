function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
}

function editElement(ref, match, replaceText) {
    let text = ref.textContent;
    let regex = new RegExp(match, 'g');
    let res = text.replace(regex, replaceText);
    ref.textContent = res;
}