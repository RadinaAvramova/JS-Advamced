function circleArea(radius) {
    let inputType = typeof(radius);

    if(inputType === 'number') {
        let area = Math.pow(radius, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

function circleArea(input) {
    let result;

    let inputType = typeof(input);

    if(inputType === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

function calculateRadius(radius) {
    let typeOfInput = typeof radius;

    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    } else {
        console.log((radius * radius * Math.PI).toFixed(2))
    }
}
circleArea(5);
circleArea('name')