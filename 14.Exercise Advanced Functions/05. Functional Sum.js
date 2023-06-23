function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function() { return sum };
    return calc;
}

function add(num) {
    let sum = 0;
    sum += num;
  
    function calc(anotherNum) {
      sum += anotherNum;
      return calc;
    }
  
    calc.toString = () => sum;
    return calc;
  }
  
  console.log(add(1)(2)(3)(4)(5).toString());



  function add(x) {
    function sum(a) {
        x += a;
        return sum;
    }
    sum.toString = () => x;
    return sum;
}

console.log(add(1)(3)(2)); // Should Return: 6