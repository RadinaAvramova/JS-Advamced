function search() {
   // capture elements
   const listItems = document.querySelectorAll("#towns li");
   const inputValue = document.querySelector("input").value;
   const result = document.getElementById("result");
 
   // business logic
   let sum = 0;
 
   for (const li of listItems) {
     const inputToLower = inputValue.toLowerCase();
     const liTextToLower = li.textContent.toLowerCase();
 
     if (liTextToLower.includes(inputToLower)) {
       li.style.fontWeight = "bold";
       li.style.textDecoration = "underline";
       sum++;
     } else {
       li.style.fontWeight = "";
       li.style.textDecoration = "";
     }
   }
 
   result.textContent = `${sum} matches found`;
 }

 function search() {
  towns = Array.from(document.querySelectorAll('ul#towns>li'));
  searchText = document.querySelector('input#searchText').value;
  resultDiv = document.querySelector('div#result');

  let matches = 0;
  towns.forEach(townLiElement => {
     let townName = townLiElement.textContent;
     if (searchText && townName.indexOf(searchText) >= 0) {
        townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
        matches++;
     }
  });
  resultDiv.textContent = `${matches} matches found`;
}