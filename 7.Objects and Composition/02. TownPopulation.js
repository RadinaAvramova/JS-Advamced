function townPopulation(arr) {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        let [name, population] = arr[i].split(' <-> ');
        population = Number(population);
        if(map[name === undefined]) {
            map[name] = 0;
        }
        
        map[name] += population;
    }

    for(const townName in map) {
        console.log(`${townName} : ${map[townName]}`);
    }
}

function townPopulation(townsArr) {
    const towns = {};
    for(let townsAsString of townsArr) {
        let [name, population] = townsAsString.split(' <-> ');
        population = Number(population);

        if(towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for(let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

//Array.reduce()

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])