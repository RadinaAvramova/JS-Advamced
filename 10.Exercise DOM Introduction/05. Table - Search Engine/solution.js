function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);
   const rows = document.querySelectorAll("tbody tr");
 
   function onClick() {
     const inputValueToLower = document
       .getElementById("searchField")
       .value.toLowerCase();
 
     for (let row of rows) {
       const rowTextToLower = row.textContent.toLowerCase();
 
       if (rowTextToLower.includes(inputValueToLower)) {
         row.setAttribute("class", "select");
       } else {
         row.removeAttribute("class");
       }
     }
   }
 }

 function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = searchElement.value;

      // After every search ("Search" button is clicked), 
      // remove all already selected classes (if any) from the previous search, 
      // for the new search to contain only the new result.
      rowElements.forEach(row => {
          row.className = '';
      });

      // If any of the rows contain the submitted string, 
      // add a class select to that row. Note that more than one row may contain the given string. 
      let filteredRows = rowElements.filter(row => {
          let values = Array.from(row.children);

          if (values.some(td => td.textContent.includes(searchText))) {
              row.className = 'select';
          }
      });

      // After every search ("Search" button is clicked), clear the input field
      searchElement.value = '';
  }
}

function solve() {
  let dataTr = Array.from(document.querySelectorAll('tbody > tr'));
  let searchBtn = document.querySelector("#searchBtn");
  let searchField = document.querySelector("#searchField");
  searchBtn.addEventListener('click', function () {
      let regex = new RegExp(searchField.value, 'gim');
      dataTr.map(e => {
          e.classList.remove('select');
          if (e.innerHTML.match(regex) !== null) {
              e.className = 'select';
          }
      });
      searchField.value = '';
  });
}

function solve() {
  let input = document.getElementById('searchField');
  let body = document.querySelectorAll('tbody tr');

  if (input === null || body === null) {
     throw new Error('Missing HTML elements!');
  }

  document.getElementById('searchBtn').addEventListener('click', main);
  function main() {
     for (let tr of body) {
        tr.classList.remove('select');
     }
     if (input.value == '') {
        return '';
     }
     for (let tr of body) {
        if (tr.textContent.includes(input.value)) {
           tr.classList.add('select');
        }
     }
     input.value = '';
  }
}