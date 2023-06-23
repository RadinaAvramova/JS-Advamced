function jansNotation(arr) {
    // declare dictionary with operands and methods behind
    const calcMap = {
      "+": (a, b) => a + b,
      "-": (a, b) => b - a,
      "*": (a, b) => a * b,
      "/": (a, b) => b / a,
    };
  
    const clonedArr = [...arr];
    const numbers = [];
  
    for (let i = 0; i <= arr.length; i++) {
      if (i === arr.length) {
        if (numbers.length === 1) {
          return numbers[0];
        }
        return "Error: too many operands!";
      }
  
      if (typeof clonedArr[i] === "number") {
        numbers.push(clonedArr[i]);
      } else {
        const operand = clonedArr[i];
  
        if (numbers.length < 2) {
          return "Error: not enough operands!";
        }
  
        const numbA = numbers.pop();
        const numbB = numbers.pop();
        const result = calcMap[operand](numbA, numbB);
        numbers.push(result);
      }
    }
  }

function solve(instructions) {
    let operands = [];

    for (let i of instructions) {
        let isOperator = i === '+' || i === '-' || i === '*' || i === '/';
        if (isOperator) {
            if (operands.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let operand1 = operands.pop();
                let operand2 = operands.pop();
                switch (i) {
                    case '+': operand2 += operand1; break;
                    case '-': operand2 -= operand1; break;
                    case '*': operand2 *= operand1; break;
                    case '/': operand2 /= operand1; break;
                }
                operands.push(operand2);
            }
        } else {
            operands.push(i);
        }
    }

    return operands.length > 1 ? "Error: too many operands!" : operands[0];
}

function solve(array) {
    let numbers = [];
    for (const element of array) {
        if (typeof element == 'number') {
            numbers.push(element);
        } else if (numbers.length >= 2) {
            calculate(numbers, element);
        } else {
// If at any point during the calculation you don’t have two numbers saved, 
// the user-supplied too few instructions and you must print "Error: not enough operands!". 
        	console.log('Error: not enough operands!');
          	return;
        }
    }
 
    if (numbers.length > 1) {
        console.log('Error: too many operands!');
      	return;
    } else {
        console.log(numbers.toString());
    }
 
    function calculate(numbers, operator) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
          	return;
        } else {
            let operand2 = numbers.pop();
            let operand1 = numbers.pop();
 
            let result = 0;
            if (operator == '+') {
                result = operand1 + operand2;
            } else if (operator == '-') {
                result = operand1 - operand2;
            } else if (operator == '*') {
                result = operand1 * operand2;
            } else if (operator == '/') {
                result = operand1 / operand2;
            }
            numbers.push(result);
        }
    }
}

function solve(data) {
    let mapper = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return a / b;
        }
    }

    let list = []
    for (const el of data) {
        if (typeof el === 'number') {
            list.push(el);
        } else {
            let action = mapper[el];
            if (list.length >= 2) {
                let b = list.pop();
                let a = list.pop();
                list.push(action(a, b));
            } else {
                return 'Error: not enough operands!';
            }
        }
    }

    if (list.length > 1) {
        return 'Error: too many operands!';
    } else {
        return list[0];
    }
}



janSNotation([3,
    4,
    '+']
    );

janSNotation([5,
    3,
    4,
    '*',
    '-']
    )