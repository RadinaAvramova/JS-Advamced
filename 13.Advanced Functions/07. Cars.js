function cars(inputArray) {
    let collectionObj = {};
    let commandCollections = {
        create,
        set,
        print,
    }

    // 'create c1'
    //'create c2 inherit c1',
    function create(name, inherits, parentName) {
        collectionObj[name] = inherits ? Object.create(collectionObj[parentName]) : collectionObj[name] = {};
    }

    //'set c1 color red',
    function set(name, key, value) {
        collectionObj[name][key] = value;
    };

    //'print c1',
    function print(name) {
        let objectsResult = [];
        for(let objectAsKey in collectionObj[name]) {
            objectsResult.push(`${objectAsKey}:${collectionObj[name][objectAsKey]}`);
        }

        console.log(objectsResult.join(','));
    }

    inputArray.forEach(element => {
        let [command, name, key, value] = element.split(" ");
        commandCollections[command](name, key, value);
    });
}