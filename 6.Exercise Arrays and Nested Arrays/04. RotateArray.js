function rotateArray(arr, num) {
    const  collectionsOfStr = [...arr];

    for(let i = 0; i < num; i++) {
        const lastNumber = collectionsOfStr.pop();
        collectionsOfStr.unshift(lastNumber);
    }

    console.log(collectionsOfStr.join(" "));
    //return collectionOfStr;
}

function rotateArray(arr, num) {

    for(let i = 0; i < num; i++) {
        const lastNumber = arr.pop();
        arr.unshift(lastNumber);
    }

    console.log(arr.join(" "));
}



rotateArray(['1',
'2',
'3',
'4'],
2
);

rotateArray(['Banana',
'Orange',
'Coconut',
'Apple'],
15
)