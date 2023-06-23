function largestNumber(x, y, z) {
    let result;
    if(x >= y && x >= z) {
        result = x;
    }else if(y >= x && y >= z) {
        result = y;
    } else {
        result = z;
    }
    console.log(`The largest number is ${result}.`);
}


function largestNumber(...params) {
    console.log(`The largest number is ${Math.max(...params)}.`);
}

function printLargestNumber(num1,num2,num3) {
    console.log(`The largest number is ${Math.max(num1,num2,num3)}.`);
}

function largestNumber(num1, num2, num3) {
    let result;
    if(num1 > num2 && num1 > num3) {
        result = num1;
    }else if(num2 > num1 && num2 > num3) {
        result = num2;
    } else if (num3 > num1 && num3 > num2) {
        result = num3;
    }
    console.log(`The largest number is ${result}.`);
}

function largestNumber(num1, num2, num3) {
    let largest = num3;
    if(num1 > num2 && num1 > num3) {
        largest = num1;
    } else if(num2 > num1 && num2 > num3) {
        largest = num2;
    } else if(num3 > num1 && num3 > num2){
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
