function printEveryNthElementFromAnArray(input, step) {
    return input.filter((element, index) => index % step == 0);
}

function printNthElement(arr, step) {
    const output = [];

    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if(i % step === 0) {
            output.push(element);
        }
    }

    return output;
}

// function printNthElement(arr, step) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (i % step === 0) {
//       output.push(element);
//     }
//   }

//   return output;
// }


function printNthElement(arr, num) {
    const result = [];
    for (let i = 0; i < arr.length; i += num) {
      result.push(arr[i]);
    }
  
    return result;
}

printEveryNthElementFromAnArray(['5',
'20',
'31',
'4',
'20'],
2
);

printEveryNthElementFromAnArray(['dsa',
'asd',
'test',
'tset'],
2
)

printEveryNthElementFromAnArray(['1',
'2',
'3',
'4',
'5'],
6
)