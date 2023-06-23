function pieceOfPie(pies, startFlavor, endFlavor) {
    const start = pies.indexOf(startFlavor);
    const end = pies.indexOf(endFlavor) + 1;

    const result = pies.slice(start, end);

    return result;
}

function pieceOfPie(arr, pie1, pie2) {
    let firstPieIndex = arr.indexOf(pie1);
    let secondPieIndex = arr.indexOf(pie2);
    let result = arr.slice(firstPieIndex, secondPieIndex + 1);
    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)