function create(words) {
   //capture div wrapper
   const contentDiv = document.getElementById("content");

   //loop words
   words.forEach((word) => {
      //create elements
      const div = document.createElement("div");
      const paragraph = document.createElement("p");

      //setup paragraph
      paragraph.textContent = word;
      paragraph.style.display = "none";

      //setup div
      div.appendChild(paragraph);
      div.addEventListener("click", revealOnClick);

      //add to content
      contentDiv.appendChild(div);
   });

   //on click
   function revealOnClick(e) {
      e.currentTarget.children[0].style.display = "block";
   }
}

function create(words) {
   for (let word of words) {
       let div = document.createElement('div');
       let paragraph = document.createElement('p');
       paragraph.textContent = word;
       paragraph.style.display = 'none';
       div.appendChild(paragraph);
       div.addEventListener('click', function() {
           paragraph.style.display = 'block';
       })

       let contentDiv = document.getElementById('content');
       contentDiv.appendChild(div);
   }
}

function create(sentences) {
   let content = document.getElementById('content');

   for (let sentence of sentences) {
       let div = document.createElement('div');
       let p = document.createElement('p');
       p.style.display = 'none';

       p.textContent = sentence;
       div.appendChild(p);

       div.addEventListener('click',displayParagraph);

       content.appendChild(div);
   }

   function displayParagraph(event) {
      event.target.children[0].style.display = 'block';
   }
}


function create(words) {
   const content = document.getElementById("content");
 
   for (const word of words) {
     // create elements
     const div = document.createElement("div");
     const paragraph = document.createElement("p");
 
     // setup paragraph
     paragraph.textContent = word;
     paragraph.style.display = "none";
 
     // setup div
     div.appendChild(paragraph);
     div.addEventListener("click", reveal);
 
     // append to content
     content.appendChild(div);
   }
 
   function reveal(e) {
     e.currentTarget.children[0].style.display = "block";
   }
 }