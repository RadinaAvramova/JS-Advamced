function objectFactory(library, orders) {
    const result = [];

    for(let order of orders) {
        const current = Object.assign({}, order.template);
        for(let part of order.parts) {
            current[part] = library[part];
        }
        result.push(current);
    }

    return result;
}

function createObject(library, orders) {
    let results = [];
    for(const order of orders) {
        let template = order.template;
        let obj = Object.assign({}, template);
        let parts = order.parts;
        for(const methodName of parts) {
            obj[methodName] = library[methodName];
        }

        results.push(obj);
    }

    return results;
}