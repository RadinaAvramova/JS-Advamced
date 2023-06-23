function fruit(fruit, weightInGrams, money) {
    const weightInKg = Number(weightInGrams) / 1000;
    const costPerKg = weightInKg * Number(money);

    const output = `I need $${costPerKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
    console.log(output);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);