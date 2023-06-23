function addAndRemoveElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result[i] = i + 1;
        } else if (arr[i] === 'remove'){
            result.pop()
        }
    }
    if (result.length <= 0) {
        console.log('Empty');
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined || result[i] == '') {
        } else {
            console.log(result[i]);
        }
    }
}

function addAndRemoveElements(arr) {
    let num = 1;
    const result = [];

    arr.forEach((cmd) => {
        if(cmd === "add") {
            result.push(num);
        } else {
            result.pop();
        }
        num += 1;
    });

    const output = result.length >= 1 ? result.join('\n') : "Empty";
    console.log(output);
}

addAndRemoveElements(['add',
'add',
'add',
'add']);

addAndRemoveElements(['add',
'add',
'remove',
'add',
'add']);

addAndRemoveElements(['remove',
'remove',
'remove']);