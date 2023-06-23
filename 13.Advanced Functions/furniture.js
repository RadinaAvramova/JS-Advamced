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
        const selectedItems = items.filter(i => i.isChecked()).map(i => i.item);
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
        const row = document.createElement('tr');

        row.appendChild(createCol(createImg(item.img)));
        row.appendChild(createCol(createPara(item.name)));
        row.appendChild(createCol(createPara(item.price)));
        row.appendChild(createCol(createPara(item.decFactor)));

        const check = createCheck();
        row.appendChild(createCol(check));

        return {
            element: row,
            item,
            isChecked
        };

        function isChecked() {
            return check.checked;
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
}