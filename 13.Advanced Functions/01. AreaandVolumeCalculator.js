function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    let objects = JSON.parse(input);
    function calc(obj) {
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(vol.call(obj));
        return { area: areaObj, volume: volumeObj }
    }

    return objects.map(calc);
}

function solve(area, vol, input) {
    let result = [];
    let objects = JSON.parse(input);
    for(const obj of objects) {
        let areaValue = area.call(obj);
        let volume = vol.call(obj);
        result.push({area: areaValue, volume});
    }

    return result;
}