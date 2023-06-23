//<p id="content">
    //The Rose Valley (Bulgaria) is located just south of the Balkan Mountains(Kazanlak). The most common oil-bearing rose found in the valley
    //is the pink-petaled Damask rose (Rosa damascena Mill).
//</p>
//<p id="holder">
    //Lorem ipsum dolor sit amet, (consecteur adipiscing elit), sed to eiusmod (tempor) incididunt ut labore (et dolore magna) aliqua.
//</p>

function extract(content) {
    let p = document.getElementById(content);
    let text = p.textContent;

    let regex = /\(([^()]*)\)/g;
    let res = [...text.matchAll(regex)].map(x => x[1]);
    let resString = res.join('; ');
    return resString;
}

function extract(elementId) {
    let para = document.getElementById(elementId).textContent;
    let pattern = /\(([^]+)\)/g;
    let result = [];

    let match = pattern.exec(para);
    while(match) {
        result.push(match[1]);
        match = pattern.exec(para);
    }

    return result.join('; ');
}