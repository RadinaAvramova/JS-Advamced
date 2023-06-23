function lowestPricesInCities(input) {
    const result = {};

    for(const line of input) {

        const [town, product, price] = line.split(" | ");

        if(!result[product]) {
            result[product] = {};
        }

        result[product][town] = Number(price);
    }

    for(const [product, towns] of Object.entries(result)) {
        const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}

function lowestPricesInCities(input) {
    let products = new Map();
    input.forEach(row => {
        let [town, product, priceText] = row.split(' | ');
        let price = Number(priceText);

        if (!products.get(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, price);
    });

    let result = [];

    for (const productWithPrice of products) {
        // let lowestPrice = [...productWithPrice[1]].sort((a, b) => a[1] - b[1])[0];
        const towns = [...productWithPrice[1]]; // spread into new area
        let lowestPrice = towns.sort((a, b) => a[1] - b[1])[0];
        // .sort((a, b) => a[1] - b[1])[0] => [0] will take the town at the first position after sorting for lowest price
        result.push(`${productWithPrice[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }

    console.log(result.join('\n'));
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)