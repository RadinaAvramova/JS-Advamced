function calorieObject(arrOfStr) {
    const result = {};

    for(let i = 0; i < arrOfStr.length; i+=2) {
        result[arrOfStr[i]] = Number(arrOfStr[i+1]);
    }

    return result;
}

function printObject(params) {
    let caloriesData = {};

    for (let i = 0; i < params.length; i += 2) {
        let product = params[i];
        let calories = Number(params[i + 1]);

        caloriesData[product] = calories;
    }

    console.log(caloriesData);
}



calorieObject(['Yoghurt', '48', 'Rise', '138',
'Apple', '52'])

calorieObject(['Potato', '93', 'Skyr', '63',
'Cucumber', '18', 'Milk', '42'])


"configurations": [
    {
    "type": "chrome",
    "request": "launch",
    "name": "Open Tamplate.html",
    "file": "${file}",
    "webRoot": "${fileDirname}"
    }
    ]