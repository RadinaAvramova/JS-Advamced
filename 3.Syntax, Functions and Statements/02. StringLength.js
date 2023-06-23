function stringLength(str1, str2, str3) {
    let len1 = str1.length;
    let len2 = str2.length;
    let len3 = str3.length;

    let sumLength = len1 + len2 + len3;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}


function stringLength(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;

    sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

function stringLength(str1, str2, str3) {
    let sumLength = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}

function printStringsLength(str1, str2, str3) {
    let sumLength = str1.length + str2.length + str3.length;
    let averageSumLength = Math.floor(sumLength / 3);

    console.log(`${sumLength}\n${averageSumLength}`);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3' )