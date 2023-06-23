function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
    for(let td of secondColumn) {
        if(td.textContent == email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted";
            return;
        }

        document.getElementById('result').textContent = "Not found.";
    }
}

function deleteByEmail(){
    let emailTds = document.querySelectorAll("table tr td:nth-child(2)");
    let deleted = false;
    for(let td of emailTds){
        if(td.textContent == document.getElementsByName('email')[0].value){
            td.parentNode.parentNode.removeChild(td.parentNode);
            deleted = true;
        }
    }

    document.getElementById('result').textContent = deleted ? "Deleted." : "Not found.";
}

function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value.trim();
    let trs = document.getElementsByTagName('tr');
    let trToBeDeleted = '';
    let resultElement = document.getElementById('result');

    for (let tr of trs) {
        let td = tr.children[1];
        if(td.textContent === input){
            trToBeDeleted = tr;
            resultElement.innerText = 'Deleted.';
            trToBeDeleted.parentNode.removeChild(trToBeDeleted);
            return;
        }
    }

   resultElement.textContent = 'Not found.'
}