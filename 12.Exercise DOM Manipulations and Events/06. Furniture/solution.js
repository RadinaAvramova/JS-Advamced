function solve() {
  //capture elements
  const table = document.querySelector("table.table tbody");
  const [input, output] = [...document.querySelectorAll("textarea")];
  const [generate, buyBtn] = [...document.querySelectorAll("button")];

  //attach events
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);


  //helper functions
  function p(...content) {
    return createElement("p", {}, ...content);
  }

  function td(...content) {
    return createElement("td", {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    //loop props and fill element
    for(const prop in props) {
      element[prop] = props[prop];
    }

    //loop content and fill element
    for(let entry of content) {
      if(typeof entry === "string" || typeof entry === "number") {
        entry = document.createTextNode(entry);
      }

      element.appendChild(entry);
    }

    return element;
  }

  //on click function
  const items = [];
  function generate(e) {
    const data = JSON.parse(input.value);

    for(const item of data) {
      //create checkbox
      const checkbox = createElement('input', { type: "checkbox" });

      //create row
      const { img, name, price, decFactor } = item;
      const row = createElement(
        "tr", 
        {}, 
        td(createElement('img', { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkbox)
      );

      //push items
      item.push({ element: row, isChecked, item });

      function isChecked() {
        return checkbox.isChecked;
      }

      table.appendChild(row);
    }
  }

  function buy(e) {
    //
    const allchecked = items.filter((i) => i.isChecked());
    const furniture = items
                          .filter((i) => i.isChecked())
                          .reduce(
                            (acc, { item: c }, i, a) => {
                              acc.names.push(c.name);
                              acc.total += Number(c.price);
                              acc.decFactor += Number(c.decFactor) / a.length;
                              return acc;
                            },
                            { names: [], total: 0, decFactor: 0 }
                          );
    const result = `Bought furniture: ${furniture.names.join(", ")}
    Total price: ${furniture.total.toFixed(2)}
    Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}



function solve() {
  let generateBtn = document.querySelector('button');
  let buyBtn = Array.from(document.querySelectorAll('button'))[1];

  const tableBody = document.querySelector('tbody');
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function generate() {
      let textArea = document.querySelector('textarea').value;

      let parsedArray = JSON.parse(textArea);

      for (let furniture of parsedArray) {
          let tableRowElement = document.createElement('tr');

          let tdImage = document.createElement('td');
          let tdName = document.createElement('td');
          let tdPrice = document.createElement('td');
          let tdFactor = document.createElement('td');
          let tdMark = document.createElement('td');

          tableRowElement.appendChild(tdImage);
          tableRowElement.appendChild(tdName);
          tableRowElement.appendChild(tdPrice);
          tableRowElement.appendChild(tdFactor);
          tableRowElement.appendChild(tdMark);

          let image = document.createElement('img');
          image.src = furniture.img;
          tdImage.appendChild(image);

          tdName.innerText = furniture.name;
          tdPrice.innerText = furniture.price;
          tdFactor.innerText = furniture.decFactor;

          let checkBox = document.createElement('input');
          checkBox.type = 'checkbox';

          tdMark.appendChild(checkBox);

          tableBody.appendChild(tableRowElement);
      }
  }

  function buy() {
      let resultTextArea = Array.from(document.querySelectorAll('textarea'))[1];
      let output = [];

      let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
          .filter(e => e.checked === true)
          .map(e => e.parentNode.parentNode);

      let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerText)
          .join(', ');

      output.push(`Bought furniture: ${bought}`);

      let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerText).map(Number)
          .reduce((acc, current) => acc + current, 0);

      output.push(`Total price: ${totalPrice.toFixed(2)}`);

      let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerText).map(Number)
          .reduce((acc, current) => acc + current, 0) / toBuy.length;

      output.push(`Average decoration factor: ${averageFactor}`);

      resultTextArea.value = output.join('\n');
  }
}

function solve() {
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);
 
 
  let inputTextBox = document.getElementsByTagName('textarea')[0];
  let resultTextBox = document.getElementsByTagName('textarea')[1];
 
  let furnatureList = document.getElementsByTagName('tbody')[0];
 
  function generate() {
    let furnetureArrayInput = JSON.parse(inputTextBox.value);
    furnetureArrayInput.forEach(obj => {
      let {img, name, price, decFactor} = obj;
      let newRow = furnatureList.insertRow(-1);
      let imgCell = newRow.insertCell(0);
      let nameCell = newRow.insertCell(1);
      let priceCell = newRow.insertCell(2);
      let decFactorCell = newRow.insertCell(3);
      let checkBoxCell = newRow.insertCell(4);
 
      let imgElement = document.createElement('img');
      imgElement.src = img;
      imgCell.appendChild(imgElement);
 
      let nameElement = document.createElement('p');
      nameElement.textContent = name;
      nameCell.appendChild(nameElement);
 
      let priceElement = document.createElement('p');
      priceElement.textContent = price;
      priceCell.appendChild(priceElement);
 
      let decFactorElement = document.createElement('p');
      decFactorElement.textContent = decFactor;
      decFactorCell.appendChild(decFactorElement);
 
      let checkBoxElement = document.createElement('input');
      checkBoxElement.type = 'checkbox';
      checkBoxCell.appendChild(checkBoxElement);
    });
    inputTextBox.value = "";
  }
 
  function buy() {
    let boughtFurniture = [];
    let totalPrice = 0;
    let sumDecFactor = 0;
    let counter = 0;
 
          for (row of furnatureList.querySelectorAll("tr")) {
            if (row.querySelectorAll("input")[0].checked) {
              const productInfo = row.querySelectorAll("p");
              boughtFurniture.push(productInfo[0].textContent);
              totalPrice += Number(productInfo[1].textContent);
              sumDecFactor += Number(productInfo[2].textContent);
              counter++;
            }
          }
    
    let avgDecFactor = sumDecFactor / counter || 1;
    let output = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    output += `Total price: ${totalPrice.toFixed(2)}\n`;
    output += `Average decoration factor: ${avgDecFactor}`;
    resultTextBox.value = output;
 
  }
}


function solve() {
  let generateBtn = document.querySelector('button');
  let buyBtn = Array.from(document.querySelectorAll('button'))[1];

  const tableBody = document.querySelector('tbody');
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function generate() {
      let textArea = document.querySelector('textarea').value;

      let parsedArray = JSON.parse(textArea);

      for (let furniture of parsedArray) {
          let tableRowElement = document.createElement('tr');

          let tdImage = document.createElement('td');
          let tdName = document.createElement('td');
          let tdPrice = document.createElement('td');
          let tdFactor = document.createElement('td');
          let tdMark = document.createElement('td');

          tableRowElement.appendChild(tdImage);
          tableRowElement.appendChild(tdName);
          tableRowElement.appendChild(tdPrice);
          tableRowElement.appendChild(tdFactor);
          tableRowElement.appendChild(tdMark);

          let image = document.createElement('img');
          image.src = furniture.img;
          tdImage.appendChild(image);

          tdName.innerText = furniture.name;
          tdPrice.innerText = furniture.price;
          tdFactor.innerText = furniture.decFactor;

          let checkBox = document.createElement('input');
          checkBox.type = 'checkbox';

          tdMark.appendChild(checkBox);

          tableBody.appendChild(tableRowElement);
      }
  }

  function buy() {
      let resultTextArea = Array.from(document.querySelectorAll('textarea'))[1];
      let output = [];

      let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
          .filter(e => e.checked === true)
          .map(e => e.parentNode.parentNode);

      let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerText)
          .join(', ');

      output.push(`Bought furniture: ${bought}`);

      let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerText).map(Number)
          .reduce((acc, current) => acc + current, 0);

      output.push(`Total price: ${totalPrice.toFixed(2)}`);

      let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerText).map(Number)
          .reduce((acc, current) => acc + current, 0) / toBuy.length;

      output.push(`Average decoration factor: ${averageFactor}`);

      resultTextArea.value = output.join('\n');
  }
}

function solve() {
  let buttons = document.getElementsByTagName('button');
  let generateBtn = buttons[0];
  let textAreas = document.getElementsByTagName('textarea');
  let namesOfFurnitures = [];
  let totalPrice = 0;
  let totalDecorations = 0;
  let counter = 0;

  generateBtn.addEventListener('click', () => {
      let inputOfFurnitures = textAreas[0].value;
      inputOfFurnitures = JSON.parse(inputOfFurnitures);

      for (let i = 0; i < inputOfFurnitures.length; i++) {
          fillUpTableWithFurnitures(inputOfFurnitures[i]);
      }
  });

  let buyBtn = buttons[1];

  buyBtn.addEventListener('click', () => {
      let inputs = document.getElementsByTagName('input');
      Array.from(inputs);

      for (const input of inputs) {
          if (input.checked === true) {
              let parent = input.parentElement.parentElement.children;
              let name = parent[1].innerText.trim();
              let price = +parent[2].innerText;
              let decorFac = +parent[3].innerText;

              namesOfFurnitures.push(name);
              totalPrice += price;
              totalDecorations += decorFac;
              counter++;

              textAreas[1].value = getOutput(
                  namesOfFurnitures,
                  totalPrice,
                  totalDecorations
              );
          }
      }
  });

  function fillUpTableWithFurnitures(furniture) {
      let tbody = document.getElementsByTagName('tbody')[0];
      let row = tbody.insertRow(-1);

      let img = document.createElement('img');
      img.src = furniture.img;

      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');

      row.insertCell(0).appendChild(img);
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      row.insertCell(1).appendChild(p1).innerHTML = furniture.name;
      row.insertCell(2).appendChild(p2).innerHTML = furniture.price;
      row.insertCell(3).appendChild(p3).innerHTML = furniture.decFactor;
      row.insertCell(4).appendChild(input);
  }

  function getOutput(namesOfFurnitures, totalPrice, totalDecorations) {
      // let sum = selectedFunitures['averageDecFac'].reduce((a, b) => a + b, 0);
      let average = totalDecorations / counter;

      return (
          `Bought furniture: ${namesOfFurnitures.join(', ')}\n` +
          `Total price: ${totalPrice.toFixed(2)}\n` +
          `Average decoration factor: ${average}`
      );
  }
}

function solve() {
  let generateBtn = document.querySelector("#exercise > button:nth-child(3)")
  generateBtn.addEventListener('click', addElementToTable)

  let textArea = document.querySelector("#exercise > textarea:nth-child(5)")
  let buyBtn = document.querySelector("#exercise > button:nth-child(6)")
  buyBtn.addEventListener('click', generateOutput)

  let tableBody = document.querySelector("#exercise > div > div > div > div > table > tbody")

  let buyedItems = []
  let totalPrice = 0
  let decFactor = 0
  let totalItems = 0

  function generateOutput() {
      for (let tableRow = 1; tableRow <= tableBody.rows.length; tableRow++) {
          let currCheckBox = document.querySelector(`#exercise > div > div > div > div > table > tbody > tr:nth-child(${tableRow}) > td:nth-child(5) > input[type=checkbox]`)

          if(currCheckBox.checked === true){
              let currItemName = currCheckBox.parentElement.parentElement.cells[1].innerText
              let currPrice = +currCheckBox.parentElement.parentElement.cells[2].innerText
              let currDecFactor = +currCheckBox.parentElement.parentElement.cells[3].innerText

              buyedItems.push(currItemName)
              totalPrice += currPrice
              decFactor += currDecFactor
              totalItems ++
          }

          let avrDecFactor = decFactor / totalItems

          textArea.value = `Bought furniture: ${buyedItems.join(', ')}\n`
          textArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
          textArea.value += `Average decoration factor: ${avrDecFactor}`
      }
  }

  function addElementToTable(){
      let textArea = document.querySelector("#exercise > textarea:nth-child(2)")
      let currObj = JSON.parse(textArea.value)

      for (const furniture of currObj) {
          let tableRow = document.createElement('tr')

          let image = document.createElement('td')
          let imgTag = document.createElement('img')
          imgTag.src = furniture.img
          image.appendChild(imgTag)

          let nameTag = document.createElement('td')
          let nameValue = document.createElement('p')
          nameValue.innerText = furniture.name
          nameTag.appendChild(nameValue)

          let priceTag = document.createElement('td')
          let priceValue = document.createElement('p')
          priceValue.innerText = furniture.price
          priceTag.appendChild(priceValue)

          let decFactorTag = document.createElement('td')
          let decFactorValue = document.createElement('p')
          decFactorValue.innerText = furniture.decFactor
          decFactorTag.appendChild(decFactorValue)

          let checkBoxTag = document.createElement('td')
          let checkBox = document.createElement('input')
          checkBox.type = 'checkbox'
          checkBoxTag.appendChild(checkBox)

          tableRow.appendChild(image)
          tableRow.appendChild(nameTag)
          tableRow.appendChild(priceTag)
          tableRow.appendChild(decFactorTag)
          tableRow.appendChild(checkBoxTag)

          tableBody.appendChild(tableRow)
      }
      textArea.value = ''
  }
}

function solve() {
  let textarea = document.querySelectorAll('textarea');
  let tbody = document.querySelector('tbody');
 
  [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));
  function execute(btn) {
    if (!textarea[0].value) return;
    if (btn.target.textContent === 'Generate') {
      let input = JSON.parse(textarea[0].value);
      input.forEach(furniture => {
        tbody.innerHTML += `<tr>
          <td><img src=${furniture.img}></td>
          <td><p>${furniture.name}</p></td>
          <td><p>${furniture.price}</p></td>
          <td><p>${furniture.decFactor}</p></td>
          <td><input type="checkbox"/></td>
          </tr>`
      })
    } else {
      let furnitureName = [];
      let totalPrice = 0;
      let averageDecFactor = 0;
      [...document.querySelectorAll('input:checked')]
        .forEach(furniture => {
          let parentRow = furniture.parentNode.parentNode;
          averageDecFactor += Number(parentRow.children[3].textContent);
          totalPrice += Number(parentRow.children[2].textContent);
          furnitureName.push(parentRow.children[1].textContent);
        });
      textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
      textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
    }
  }
}


function solve() {
  let boughtFurniture = document.getElementsByTagName('textarea')[1];
  let tableBody = document.getElementsByTagName('tbody')[0];
  let buttons = document.getElementsByTagName('button');
  let generateBtn = buttons[0];

  generateBtn.addEventListener('click', () => {
      let json = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (const furniture of json) {
          let row = document.createElement('tr');

          let image = document.createElement('td');
          image.innerHTML = `<img src ="${furniture.img}">`;
          row.appendChild(image);

          let nametable = document.createElement('td');
          let p = document.createElement('p');
          p.textContent = furniture.name;
          nametable.appendChild(p);
          row.appendChild(nametable);

          let priceTable = document.createElement('td');
          let p1 = document.createElement('p');
          p1.textContent = furniture.price;
          priceTable.appendChild(p1);
          row.appendChild(priceTable);

          let decFac = document.createElement('td');
          let p2 = document.createElement('p');
          p2.textContent = furniture.decFactor;
          decFac.appendChild(p2);
          row.appendChild(decFac);

          let checkBox = document.createElement('td');
          let chB = document.createElement('input');
          chB.setAttribute('type', 'checkbox');
          checkBox.appendChild(chB);
          row.appendChild(checkBox);

          tableBody.appendChild(row);
      }
  });

  let buyBtn = buttons[1];

  let checkedFurniture = [];
  let totalPrice = 0;
  let decorationFactor = 0;
  let count = 0;

  buyBtn.addEventListener('click', () => {
      let trElements = Array.from(document.getElementsByTagName('tr'));
      for (let i = 2; i < trElements.length; i++) {
          if (trElements[i].children[4].children[0].checked) {
              checkedFurniture.push(trElements[i].children[1].textContent);
              totalPrice += Number(trElements[i].children[2].textContent);
              decorationFactor += Number(
                  trElements[i].children[3].textContent
              );
              count++;
          }
      }

      boughtFurniture.value += `Bought furniture: ${checkedFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor / count}`;
  });
}


function solve() {
  // capture elements
  const table = document.querySelector("table.table tbody");
  const [input, output] = Array.from(document.querySelectorAll("textarea"));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));

  // attach events
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  // elements creation helper functions
  function p(...content) {
    return createElement("p", {}, ...content);
  }

  function td(...content) {
    return createElement("td", {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
      element[prop] = props[prop];
    }
    for (let entry of content) {
      if (typeof entry == "string" || typeof entry == "number") {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }

    return element;
  }

  // on click events
  const items = [];

  /* # table generation # */
  function generate(e) {
    // read input JSON and parse it
    // for every array element, create table row
    const data = JSON.parse(input.value);

    for (let item of data) {
      // create checkbox
      const checkBox = createElement("input", { type: "checkbox" });

      // create row
      const { name, price, decFactor, img } = item;
      const row = createElement(
        "tr",
        {},
        td(createElement("img", { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkBox)
      );

      // push items
      items.push({
        element: row,
        isChecked,
        item,
      });

      function isChecked() {
        return checkBox.checked;
      }

      // append to table
      table.appendChild(row);
    }
  }

  function buy(e) {
    const furniture = items
      .filter((i) => i.isChecked())
      .reduce(
        (acc, { item: c }, i, a) => {
          acc.names.push(c.name);
          acc.total += Number(c.price);
          acc.decFactor += Number(c.decFactor) / a.length;
          return acc;
        },
        { names: [], total: 0, decFactor: 0 }
      );

    const result = `Bought furniture: ${furniture.names.join(", ")}
  Total price: ${furniture.total.toFixed(2)}
  Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}