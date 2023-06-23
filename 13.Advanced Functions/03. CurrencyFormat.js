function createFormatter(separator, symbol, symbolFirst, formatter) {
    return (value) => formatter(separator, symbol, symbolFirst, value)
}

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function(value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return function(price) {
        return currencyFormatter(separator, symbol, symbolFirst, price);
    }
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function solution(currencyFormatter) {
    return function(value) {
        return currencyFormatter(',', '$', true, value);
    }
}