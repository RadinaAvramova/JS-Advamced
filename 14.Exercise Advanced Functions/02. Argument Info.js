// Solution
function argumentInfo() {
    let map = new Map();
 
    for (let arg of arguments) {
        let type = typeof(arg);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type)+1);
        console.log(`${type}: ${arg}`)
    }
 
    // console.log([...map.entries()]);
 
    [...map.entries()].sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}

function argumentInfo() {
    let typeCounts = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! typeCounts[typeof(arg)]){
            typeCounts[typeof(arg)] = 1;
        } else {
            typeCounts[typeof(arg)]++;
        }
    }
 
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
}



 
// Testing
argumentInfo('cat', 42,function () { console.log('Hello world!')}, 45);
console.log(`-`.repeat(40));
argumentInfo( { name: 'bob'}, { name: 'pesho'}, 3.333, 9.999, 'dog');



function solve(...args) {
    const obj = {};
  
    // sum while looping the arguments
    args.forEach((arg) => {
      const typeOfArg = typeof arg;
      console.log(`${typeOfArg}: ${arg}`);
  
      obj[typeOfArg] = obj[typeOfArg]
        ? (obj[typeOfArg] += 1)
        : (obj[typeOfArg] = 1);
    });
  
    // sort DESC
    const sortedInDescOrder = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  
    // print
    sortedInDescOrder.forEach(([key, value]) => console.log(`${key} = ${value}`));
  }
  
  solve(
    "cat",
    42,
    function () {
      console.log("Hello world!");
    },
    "asdsad",
    "dsdsad",
    1
  );
  // string: cat
  // number: 42
  // function: function () { console.log('Hello world!'); }
  // string = 1
  // number = 1
  // function = 1


  function argumentsInfo(...arguments) {
    let dataTypes = {};

    // Get the Input sorted:
    arguments.map(arg => {
        let type = typeof(arg);
        let value = String(arg);
        console.log(`${type}: ${value}`);
        dataTypes.hasOwnProperty(type) ? dataTypes[type] += 1 : dataTypes[type] = 1;
    });

    // Sort and print the Output:
    Array
        .from(Object.keys(dataTypes))
        .sort((a, b) => dataTypes[b] - dataTypes[a])
        .map(type => {
            console.log(`${type} = ${dataTypes[type]}`);
        });
}

argumentsInfo({ name: 'bob'}, 3.333, 9.999);