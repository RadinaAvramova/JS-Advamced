function heroicInventory(input) {
    const result = [];

    input.forEach((str) => {
        const obj = {};
        const heroDataArr = str.split(" / ");
        obj.name = heroDataArr[0];
        obj.level = Number(heroDataArr[1]);

        const items = heroDataArr[2];
        obj.items = items ? items.split(", ") : [];

        result.push(obj);
    });

    return JSON.stringify(result);
}

function heroicInventory(arr) {
    let res = []
    arr.map((x) => {
        let [name, level, items] = x.split(' / ')
        res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
    })
    console.log(JSON.stringify(res))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])