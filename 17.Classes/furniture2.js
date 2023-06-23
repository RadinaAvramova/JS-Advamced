function solve() {
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    const tbody = document.querySelector('tbody');

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    const items = [];

    function generate() {
        const data = JSON.parse(input.value);

        for (let item of data) {
            const row = createRow(item);
            tbody.appendChild(row.element);
            items.push(row);
        }
    }

    function buy() {
        const selectedItems = items.filter(i => i.checked);
        const names = selectedItems.map(i => i.name).join(', ');
        const total = selectedItems.reduce((a, c) => a + Number(c.price), 0);
        const decFactor = selectedItems.reduce((a, c, i, arr) => a + Number(c.decFactor) / arr.length, 0);

        output.textContent = [
            `Bought furniture: ${names}`,
            `Total price: ${total.toFixed(2)}`,
            `Average decoration factor: ${decFactor}`
        ].join('\n');
    }

    function createRow(item) {
        return new Furniture(item.name, item.img, item.price, item.decFactor);
    }
}

class Furniture {
    #check = null;

    constructor(name, img, price, decFactor) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.decFactor = decFactor;

        this.element = document.createElement('tr');
        this.#init();
    }

    #init() {
        this.element.appendChild(createCol(createImg(this.img)));
        this.element.appendChild(createCol(createPara(this.name)));
        this.element.appendChild(createCol(createPara(this.price)));
        this.element.appendChild(createCol(createPara(this.decFactor)));

        this.#check = createCheck();
        this.element.appendChild(createCol(this.#check));
    }

    get checked() {
        return this.#check.checked;
    }
}

function create(type, attr, content) {
    const result = document.createElement(type);
    Object.assign(result, attr);

    if (content != undefined) {
        result.appendChild(content);
    }

    return result;
}

const createCol = create.bind(null, 'td', { scope: 'col' });
const createPara = (text) => create('p', { textContent: text });
const createImg = (src) => create('img', { src });
const createCheck = create.bind(null, 'input', { type: 'checkbox' });