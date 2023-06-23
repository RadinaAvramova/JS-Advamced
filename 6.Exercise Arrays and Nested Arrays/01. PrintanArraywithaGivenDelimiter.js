function printAnArrayWithAGivenDelimiter(array, delimiter) {

    console.log(array.join(delimiter));

}

function print(collectionsOfWords, delimiter) {
    const output = collectionsOfWords.join(delimiter);
    console.log(output);
}


printArrayWithAGivenDelimeter(['One',
'Two',
'Three',
'Four',
'Five'],
'-');

printArrayWithAGivenDelimeter(['How about no?',
'I',
'will',
'not',
'do',
'it!'],
'_')