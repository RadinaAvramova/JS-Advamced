function solve2() {
   let textArea = document.querySelector('body > div > textarea');
   let totalPrice = 0;
   let listOfUniqueThings = [];
   let addBtn = document.getElementsByClassName('add-product');
   let arrayAddBtn = Array.from(addBtn);
   for (let i = 0; i < arrayAddBtn.length; i++) {
       arrayAddBtn[i].addEventListener('click', function one() {
           let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
           let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
           if (!listOfUniqueThings.includes(name)) {
               listOfUniqueThings.push(name);
           }
           let result = `Added ${name} for ${price} to the cart.\n`;
           totalPrice += Number(price);
           textArea.value += result;
       });
   }
   let checkOut = document.querySelector('body > div > button');
   checkOut.addEventListener('click', function final() {
       let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
       textArea.value += finalSting;
       disableButtons();
   });

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}

function solve() {
   let button = document.getElementsByTagName("button")
   let textArea = document.getElementsByTagName("textarea")[0]

   // let list = {}
   let list = new Map()

   Array.from(button).forEach(b => {
       b.addEventListener("click", (e) => {
           if (e.target.className === "add-product") {
               let currentElement = e.target.parentElement

               let priceElement = currentElement.nextElementSibling.innerHTML
               let brandElement = currentElement.previousElementSibling.children[0].innerHTML

               // if (!list[brandElement]) {
               if (!list.has(brandElement)) {
                   // list[brandElement] = 0
                   list.set(brandElement, 0)
               }
               // list[brandElement] += priceElement
               list.set(brandElement, list.get(brandElement) + Number(priceElement))

               textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`
           } else {

               // let totalPrice = Number(Object.values(list).reduce((a,b)=>a+b))
               let totalPrice = Number(Array.from(list.values()).reduce((a,b)=>+a+ +b, 0))
               // textArea.innerHTML+=`You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`
               textArea.value+=`You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`

               // Array.from(button).forEach(b => b.disabled = true)
               let buttons = Array.from(document.querySelectorAll('button'));
               buttons.forEach(button => button.disabled = true);

           }
       })
   })
}

function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(x => x.addEventListener('click', add));
   document.querySelector('.checkout').addEventListener('click', checkout);
   const products = {
      'Bread': 0.8,
      'Milk': 1.09,
      'Tomatoes': 0.99
   }
   const bought = [];
   const textArea = document.querySelector('textarea');
   let cost = 0;
   let textOutput = '';
 
   function add(e) {
      const current = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
      textOutput = `Added ${current} for ${products[current].toFixed(2)} to the cart.\n`;
      cost += products[current];
      textArea.value += textOutput;
      if (!bought.includes(current)) { bought.push(current) }
   }
 
   function checkout() {
      textOutput = `You bought ${bought.join(', ')} for ${cost.toFixed(2)}.`;
      textArea.value += textOutput;
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   }
}
