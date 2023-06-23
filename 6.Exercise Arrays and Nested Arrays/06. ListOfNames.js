function listOfNames(listOfNames) {
    const sortedArray = listOfNames.sort((nameA, nameB) => {
    return nameA.localeCompare(nameB);
    })

    sortedArray.forEach((name,index) => console.log(`${index + 1}.${name}`));
}

function sortListOfNames(listOfNames) {
    const sortedArray = listOfNames.sort((nameA, nameB) =>
      nameA.localeCompare(nameB)
    );
  
    sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));
  }

listOfNames(["John",
"Bob",
"Christina",
"Ema"]
)