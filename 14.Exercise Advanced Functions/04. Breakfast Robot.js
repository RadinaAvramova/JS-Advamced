function solution() {
 
    let supplies = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
   
    let foodRecipes = {
      apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
      lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
      burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
      cookRecipe(recipe, quantity) {
   
        let deductedQuantity = {};
   
        for (const value in this[recipe]) {
          if (this[recipe][value] * quantity > supplies[value]) {
            return `Error: not enough ${value} in stock`;
          }
          deductedQuantity[value] = supplies[value] - this[recipe][value] * quantity;
        }
   
        Object.assign(supplies, deductedQuantity);
        return 'Success';
   
      }
    }
   
    return controller = (str) => {
   
      if (str.includes('restock')) {
        let [, nutrient, quantity] = str.split(' ');
        supplies[nutrient] += Number(quantity);
        return 'Success';
      }
   
      if (str.includes('prepare')) {
        let [,  recipe, quantity] = str.split(' ');
        return foodRecipes.cookRecipe(recipe, Number(quantity));
      }
   
      return `protein=${supplies.protein} carbohydrate=${supplies.carbohydrate} fat=${supplies.fat} flavour=${supplies.flavour}`;
   
    }
   
  }

  function foodRobot() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, }
    }
 
    const productStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
 
    let output = '';
 
    const actions = {
        restock: (macronutrient, quantity) => {
            productStorage[macronutrient] += quantity;
            output = 'Success'
        },
        prepare: (recipe, quantity) => {
            let enoughProducts = true;
 
            Object.entries(recipes[recipe]).forEach(entry => {
                let [macronutrient, count] = entry;
 
                if (enoughProducts && productStorage[macronutrient] < (count * Number(quantity))) {
                    enoughProducts = false;
                    output = `Error: not enough ${macronutrient} in stock`;
                }
            })
 
            if (enoughProducts) {
                Object.entries(recipes[recipe]).forEach(entry => {
                    let [macronutrient, count] = entry;
    
                    productStorage[macronutrient] -= count*quantity;
                })
 
                output = 'Success';
            }
        },
        report: () => {
            output = '';
 
            Object.entries(productStorage).forEach(entry => {
                let [macronutrient, quantity] = entry;
 
                output += `${macronutrient}=${quantity} `;
            })
            output = output.trimEnd();
        }    
    }
 
    return function(input) {
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);
 
        actions[command](product, quantity);
 
        return output;
    }
}



function getManager() {
  // constants
  const SUCCESS_MSG = "Success";

  // dictionaries
  const elements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const receipts = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 }, //           key    value
    burger: { carbohydrate: 5, fat: 7, flavour: 3 }, // ['carbohydrate', 5] ['fat': 1] [flavour: 1]
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 },
  };

  // error handling
  const getError = (element) => `Error: not enough ${element} in stock`;

  const commands = {
    restock: (element, quantity) => {
      elements[element] += Number(quantity);
      return SUCCESS_MSG;
    },
    prepare: (recipe, quantity) => {
      let missingElementEntry;
      let errorMsg;

      for (let i = 0; i < quantity; i++) {
        //                          [0 , 1 ] = [key, value]
        missingElementEntry = Object.entries(receipts[recipe]).find(
          (x) => elements[x[0]] < Number(x[1])
        );

        if (missingElementEntry) {
          errorMsg = getError(missingElementEntry[0]);
          break;
        }

        Object.entries(receipts[recipe]).forEach((x) => {
          elements[x[0]] -= Number(x[1]);
        });
      }

      return errorMsg ? errorMsg : SUCCESS_MSG;
    },
    report: () => {
      return Object.keys(elements)
        .reduce((a, b) => {
          a.push(`${b}=${elements[b]}`);
          return a;
        }, [])
        .join(" ");
    },
  };

  return function (cmd) {
    const cmdTokens = cmd.split(" ");

    return cmdTokens.length === 1
      ? commands[cmdTokens[0]]()
      : commands[cmdTokens[0]](cmdTokens[1], cmdTokens[2]); //  commands.restock("carbohydrate", 10)
  };
}

const manager = getManager();
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); //'protein=0 carbohydrate=4 fat=3 flavour=5'

function solve(params) {
  // dictioanry
}



function breakfastRobot() {
  const microElements = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
  };

  const recipes = {
      apple: {carbohydrate: 1, flavour: 2, order: ['carbohydrate', 'flavour']},
      lemonade: {carbohydrate: 10, flavour: 20, order: ['carbohydrate', 'flavour']},
      burger: {carbohydrate: 5, fat: 7, flavour: 3, order: ['carbohydrate', 'fat', 'flavour']},
      eggs: {protein: 5, fat: 1, flavour: 1, order: ['protein', 'fat', 'flavour']},
      turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10, order: ['protein', 'carbohydrate', 'fat', 'flavour']},
  };

  const operations = {
      restock,
      prepare,
      report,
  };

  function restock(element, quantity) {
      microElements[element] += quantity;
      return 'Success';
  }

  function prepare(recipe, quantity) {
      const required = Object.assign({}, recipes[recipe]);
      required.order.map(key => required[key] *= quantity);
      for (let element of required.order) {
          if (microElements[element] < required[element]) {
              return `Error: not enough ${element} in stock`;
          }
      }
      required.order.map(key => microElements[key] -= required[key]);
      return 'Success';
  }

  function report() {
      return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
  }

  function manager(command) {
      const tokens = command.split(' ');
      return operations[tokens[0]](tokens[1], Number(tokens[2]));
  }

  return manager;
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock