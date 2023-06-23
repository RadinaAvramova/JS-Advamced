function storeCatalogue(input) {
    //sort the string
    const sortedInput = input.sort((a,b) => a.localeCompare(b));

    //build char: [ {Appricot : 20.4} ]
    const dict = {};

    for(let i = 0; i < sortedInput.length; i++) {
        const element = sortedInput[i].split(" : ").join(": ");
        const firstLetter = element[0];

        if(dict[firstLetter] === undefined) {
            dict[firstLetter] = [];
        }

        dict[firstLetter].push(` ${element}`);

    }

    let output = [];
    for(const key in dict) {
        const element = dict[key];
        output = [...output, key, ...element];
    }

    return output.join("\n");
}

function catalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }

    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let string = print2(sortedItem);
    console.log(string);

    // print(sortedItem);

    function print(arr) {
        let lastName = '';
        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                console.log(`${firstChar}`);
            }
            console.log(`  ${name}: ${line[1]}`);
            lastName = name;
        }
    }

    function print2(arr) {
        let lastName = '';
        let result = '';

        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                result +=`${firstChar}\n`;
            }

            result += `  ${name}: ${line[1]}\n`;
            lastName = name;
        }

        return result;
    }
}

function solve(input) {
    const catalog = {};
    
    for (let line of input) {
        const arr = line.split(' : ');
        const [product, price] = line.split(' : ');
        const letter = product[0];

        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = price;
    }

    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key])
            .sort((a, b) => a.localeCompare(b));

        for (let keyP of sortedProducts) {
            console.log(`  ${keyP}: ${catalog[key][keyP]}`);
        }
    }
}

function storeCatalogue(arr) {
    let products = new Map();
    for (let line of arr) {
        let data = line.split(/\b\s:\s\b/);
        let letter = line[0][0];
        if (!products.has(letter)) {
            products.set(letter, data);
        }
        else {
            products.set(letter,products.get(letter)+","+data);
        }
    }
    let myProducts = new Map([...products.entries()].sort());
    for (let [letter, items] of myProducts) {
        console.log(letter);
        if(items.constructor !== Array){
            items=items.split(',');
        }
        let products = [];
        for (let i = 0; i < items.length; i+=2) {
            let product =items[i];
            let price =items[i+1];
            let line = product+": "+price;
            products.push(line);
            products.sort();
        }
        for (let product of products) {
            console.log(`  ${product}`);
        }
    }
}

function storeCatalogue(arr) {
    let firstMap=new Map();
    for (let obj of arr) {
        let line = obj.split(/\s:\s/);
        let letter=line[0][0]
        let product=line[0];
        let price =line[1];
        if(!firstMap.has(letter)){
            firstMap.set(letter,new Map());
        }
        let secondMap=firstMap.get(letter);
        secondMap.set(product,price);
        firstMap.set(letter,secondMap);
    }
    firstMap=Array.from(firstMap).sort();
 
    for (let [letter,secondMap] of firstMap) {
        console.log(letter);
        secondArr=Array.from(secondMap).sort();
        for (let arr of secondArr) {
            console.log("  "+arr[0]+": "+arr[1]);
        }
    }
}

function solve(arr) {
    arr.sort();
 
    let lastLetter;
    while(arr.length!=0){
        if(arr[0][0]!=lastLetter){
            lastLetter = arr[0][0];
            console.log(lastLetter);
        }
        let [product, price]= arr.shift().split(' : ');
        console.log(`  ${product}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4','Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])

storeCatalogue(['Banana : 2','Rubic's Cube : 5','Raspberry P : 4999','Rolex : 100000','Rollon : 10','Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])