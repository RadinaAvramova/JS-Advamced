function echoFunction(inputAsString) {
    let stringLength = inputAsString.length;

    console.log(stringLength);
    console.log(inputAsString);
}

function echoFunction(string) {
    console.log(string.length);
    console.log(string);
}

echoFunction('Hello, JavaScript!');
echoFunction('strings are easy')