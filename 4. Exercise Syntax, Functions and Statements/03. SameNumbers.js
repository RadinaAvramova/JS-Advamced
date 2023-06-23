function sameNumbers(num) {
    let arr = num.toString().split("");
    let sum = Number(arr[0]);
    let isSame = true;

    for(let i = 1; i < arr.length; i++) {
        const currentNum = arr[i];
        sum += Number(currentNum);

        if(arr[0] !== currentNum) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

function printSum(num) {
    let digits = num.toString().split('').map(Number);
    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < digits.length; i++) {
        let currentDigit = digits[i];
        sum += currentDigit;

        if (digits[i + 1] !== undefined &&
            areEqual === true &&
            currentDigit !== digits[i + 1]) {
            areEqual = false;
        }
    }

    console.log(`${areEqual}\n${sum}`);
}

function solve(input) {
    input = String(input);
 
    let result = true;
    let sum = 0;
 
    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        sum += +input[i];
 
        if (input[i] !== firstDigit) {
            result = false;
        }
    }
 
    console.log(result);
    console.log(sum);
}

function checkForTheSameDigits(input) {
    input = String(input);
    let areTheSame = true;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i < input.length - 1) {
            if (input[i] !== input[i + 1]) {
                areTheSame = false;
            }
        }
        sum += Number(input[i]);
    }
    console.log(areTheSame);
    console.log(sum);
}


function checkForTheSameDigits(input){

    input = String(input);

    let areTheSame = true;

    let sum = 0;

    for(let i = 0; i < input.length - 1; i++ ){

     if(input[i] !== input[i+1]){

         areTheSame = false;       

     }   

     sum += Number(input[i]);

    }

    sum += Number(input[input.length-1]);

    console.log(areTheSame);

    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234)