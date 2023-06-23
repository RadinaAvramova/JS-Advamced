function solve(input) {

    let output = {}
    let store = {}
    for (let i = 0; i < input.length; i++) {
        let [item,quantity] = input[i].split('=>')
        if(item in store){
            store[item] += Number(quantity)
        } else{
            store[item] = Number(quantity)
        }

        if(store[item] >=1000){
            if(item in output){
                output[item] += Number(quantity)
            } else{
                output[item] = store[item]
            }
        }
    }

    for (let obj in output) {
        console.log(`${obj}=> ${Math.floor(output[obj]/1000)}`)
    }
}

function a(input) {

    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let i = 0; i < input.length; i++) {

        let current = input[i].split('=>');

        let fruit = current[0];
        let quantity = Number(current[1]);

        if (!totalJuice.has(fruit)) {
            totalJuice.set(fruit, 0);
        }
        let cuurentQuantity = totalJuice.get(fruit);
        cuurentQuantity += quantity;

        if (cuurentQuantity >= 1000) {
            let juiceLeft = cuurentQuantity % 1000;

            let bottlesToStore = (cuurentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(fruit)) {
                totalBottles.set(fruit, 0)
            }
            totalBottles.set(fruit, totalBottles.get(fruit) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity);

    }
    for (let [juicee,bottles]of totalBottles) {
        console.log(juicee + "=> " + bottles);
    }
}

