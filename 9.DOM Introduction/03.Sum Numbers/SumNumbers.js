//<input type="text" id="num1" /> + 
//<input type="text" id="num2" /> =
//<input type="text" id="sum" /> readonly="readonly" />
//<input type="button" value="Calc" onclick="calc()" />

//<script src="calc.js"></script>

function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sum = Number(num1) + Number(num2);

    document.getElementById('sum').value = sum;

}


function calc() {
    let input1 = document.getElementById('num1');
    let input2 = document.getElementById('num2');
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let sumInput = document.getElementById('sum');
    sumInput.value = num1 + num2;
}