function cityRecord(name, population, treasury) {
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

function cityRecord(name, population, treasury) {
    return {
        name,
        population,
        treasury
    };
}

function createRecord(name, numberOfPeople, treasury) {
    let obj = {
        name, 
        population: numberOfPeople,
        treasury
    }

    return obj;
}


cityRecord('Tortuga',
7000,
15000);

cityRecord('Santo Domingo',
12000,
23500);