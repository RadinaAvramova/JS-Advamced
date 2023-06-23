function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) { }
    function makeValueRow(obj) { };
    function escapeHtml(value) { };

    console.log(outputArr.join('\n'));
}

function solve(input) {
    let students = JSON.parse(input);
    let htmlText = ['<table>'];
    let objNames = students[0];
  
    htmlText.push(makeKeyRow(objNames));
    students.forEach(obj => htmlText.push(makeValueRow(obj)));
    htmlText.push('</table>');
  
    function makeKeyRow(arr) {
      let keys = [];
      Object.keys(arr).forEach(key => {
        keys.push(`<th>${escapeHTML(key)}</th>`);
      });
      return ("<tr>" + keys.join('') + "</tr>");
    }
  
    function makeValueRow(obj) {
      let rows = [];
      Object.values(obj).forEach(value => {
        rows.push(`<td>${escapeHTML(value)}</td>`);
      });
      return ("<tr>" + rows.join('') + "</tr>");
    }
  
    function escapeHTML(value) {
      return value
        .toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  
    return htmlText.join('\r\n');
  }

function JsonToHtml(jsonString) {
  let arr = JSON.parse(jsonString);
  let output = '<table>\n';
  let firstObj = arr[0];
  output += '<tr>\n';
  for(const key in firstObj) {
    output += `<th>${key}</th>`;
  }

  output += '</tr>\n';

  for(const obj of arr) {
    output += '</tr>\n';
    for(const key in obj) {
      output += `<td>${obj}</td>`
    }

    output += '</tr>\n';
  }

  output += '</table>';

  console.log(output);
}

JsonToHtmlTable([{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
))

JsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)