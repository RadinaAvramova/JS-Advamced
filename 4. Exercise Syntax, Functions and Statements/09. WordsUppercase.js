function wordsUpperCase(words) {
    const pattern = /\w+/g;
    const output = words.match(pattern).join(", ").toUpperCase();
    console.log(output);
}

function solve(text) {

    let result = text.toUpperCase()
      .split(/[\W]+/)
      .filter(w => w.length > 0)
      .join(", ");
  
    console.log(result);
  }

  function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }

  function solve(text){

    const regex = /\w+/gm
   
     let result = text.match(regex);
   
    console.log(result.join(', ').toUpperCase())
   
   };



wordsUpperCase('Hi, how are you?' );
wordsUpperCase('hello');