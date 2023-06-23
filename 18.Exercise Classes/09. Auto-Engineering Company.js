function solve(input) {
    let mapCars = new Map();
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        let mapModels = mapCars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(produced));
    }
    for (const brand of mapCars.keys()) {
        console.log(brand);
        let mapModels = mapCars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}

function autoCompany(input) {
    let cars = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, producedCars });
        } else if (cars[carBrand].some(car => car.carModel === carModel)) {
            let targetCar = cars[carBrand].find(car => car.carModel === carModel);
            targetCar.producedCars += producedCars;
        } else {
            cars[carBrand].push({ carModel, producedCars });
        }
    }

    // console.log(cars)
    for (const [brand, car] of Object.entries(cars)) {
        console.log(brand);
        for (const currentCar of Object.values(car)) {
            console.log(`###${currentCar.carModel} -> ${currentCar.producedCars}`);
        }
    }
}

function autoEngineeringCompany(arr) {
    let brands = new Map();
    for (let line of arr) {
        let tokens = line.split(" | ").filter(w => w !== "");
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = Number(tokens[2]);
 
        if (brands.has(brand)) {
            if (brands.get(brand).has(model)) {
                brands.get(brand).set(model,  brands.get(brand).get(model) + quantity);
            } else {
                brands.get(brand).set(model, quantity);
            }
        } else {
            let modelsAndTotalSold = new Map();
            modelsAndTotalSold.set(model, quantity);
            brands.set(brand, modelsAndTotalSold);
        }
    }
    for (let [br, modell] of brands) {
        console.log(`${br}`);
        for (let [model, totalSold] of modell) {
            console.log(`###${model} -> ${totalSold}`);
        }
    }
}