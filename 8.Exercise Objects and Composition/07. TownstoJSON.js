function townsToJson(towns) {
    //Transform data to matrix
    const matrix = towns.map((row) => 
        row
            .trim()
            .split("|")
            .map((ceil) => ceil.trim())
    )

    .map((row) => row.filter((ceil) => ceil !== ""));

    //Determine header and value data
    const headers = matrix[0];
    const data = matrix.slice(1);

    //Map data
    const result = data.map((row) => {
        const tempDict = {};

        headers.forEach((header, index) => {
            const tryParseToNum = Number(row[index]);
            tempDict[header] = isNaN(tryParseToNum)
                ? row[index]
                : Number(tryParseToNum.toFixed(2));
        });

        return tempDict;
    });

    console.log(JSON.stringify(result));
}

function solve(input) {
    const towns = [];
 
    const regex = new RegExp(/\s*\|\s*/);
    for (const line of input.splice(1)) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2),
            Longitude: +Number(tokens[2]).toFixed(2)
        });
    }
 
    return JSON.stringify(towns);
}

function towns(array = []) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
 
    let result = [];
 
    for (let i = 1; i < array.length; i++) {
        let arr = array[i].split("|");
        let name = arr[1].trim();
        let latitude = (+arr[2].trim()).toFixed(2);
        let longitude = (+arr[3].trim()).toFixed(2);
      
        let town = new Town(name, latitude, longitude);
 
        let townForJSON = {};
 
        townForJSON["Town"] = town.name;
        townForJSON["Latitude"] = town.latitude;
        townForJSON["Longitude"] = town.longitude;
 
        let objectToJSON = JSON.stringify(townForJSON, function (key, value) {
            if (key == "Latitude") {
                return Number(value);
            } else if (key == "Longitude") {
                return Number(value);
            } else {
                return value;
            }
        });
 
        result.push(objectToJSON);      
    }
 
    console.log("[" + result.join(",") + "]");
}



townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])