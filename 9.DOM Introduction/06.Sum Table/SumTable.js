//<table>
    //<tbody>
        //<tr><th>Product</th><th>Cost</th></tr>
        //<tr><td>Beer</td>   <td>2.88</td></tr>
        //<tr><td>Fries</td>  <td>2.15</td></tr>
        //<tr><td>Burger</td> <td>4.59</td></tr>

        //<tr><td>Total:</td>   <td id="sum"></td></tr>
    //</tbody>
//</table>
//<button onclick="sum()">Sum</button>

function sum() {
    let table = document.querySelectorAll("table dir");
    let total = 0;
    for(let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost);
    }

    document.getElementById("sum").textContent = total;
}


function sumTable() {
    let numbersForSum = document.querySelectorAll('td:nth-child(2)');
    let sum = 0;

    for(let i = 0; i < numbersForSum.length - 1; i++) {
        sum += Number(numbersForSum[i].textContent);
    }

    let result = document.getElementById('sum');
    result.textContent = sum;
}
