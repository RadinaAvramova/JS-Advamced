function solve() {
    let cards = document.getElementsByTagName('img');
  
    let upperCard = 0; 
    let upperCardNode;
    let bottomCard = 0;
    let bottomCardNode;
  
    for (const card of cards) {
       card.addEventListener('click', function(e) {
          card.setAttribute('src', 'images/whiteCard.jpg')
  
          let parentID = this.parentNode.getAttribute('id');
  
          if (parentID === 'player1Div') {
  
             let span = document.querySelectorAll('#result span')[0];
             let name = this.getAttribute('name');
             upperCard = Number(name); 
             upperCardNode = this;
             span.append(name);
  
          } else if (parentID === 'player2Div') {
  
             let span = document.querySelectorAll('#result span')[2];
             let name = this.getAttribute('name');
             bottomCard = Number(name);
             bottomCardNode = this;
             span.append(name);
  
          }
          if (upperCard > bottomCard && upperCard !== 0 && bottomCard !== 0) {
  
             upperCardNode.style = 'border: 2px solid green';
             bottomCardNode.style = 'border: 2px solid red';
             document.getElementById('history').append(`[${upperCard} vs ${bottomCard}] `);
             let spanUpRes = document.querySelectorAll('#result span')[0];
             let spanDownRes = document.querySelectorAll('#result span')[2];
             spanUpRes.innerHTML = '';
             spanDownRes.innerHTML = '';
             upperCard = 0;
             bottomCard = 0;
  
          } else if (upperCard < bottomCard && upperCard !== 0 && bottomCard !== 0) {
  
             bottomCardNode.style = 'border: 2px solid green';
             upperCardNode.style = 'border: 2px solid red';
             document.getElementById('history').append(`[${upperCard} vs ${bottomCard}] `);
             let spanUpRes = document.querySelectorAll('#result span')[0];
             let spanDownRes = document.querySelectorAll('#result span')[2];
             spanUpRes.innerHTML = '';
             spanDownRes.innerHTML = '';
             upperCard = 0;
             bottomCard = 0;
  
          } else if (upperCard === bottomCard) {
  
             document.getElementById('history').append(`[${upperCard} vs ${bottomCard}] `);
             let spanUpRes = document.querySelectorAll('#result span')[0];
             let spanDownRes = document.querySelectorAll('#result span')[2];
             spanUpRes.innerHTML = '';
             spanDownRes.innerHTML = '';
             upperCard = 0;
             bottomCard = 0;  
  
          }
       })
    }  
 }


function playingCard(first, second) {
   let objCardValue = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: "J",
      Q: "Q",
      K: "K",
      A: "A"
   }

   let objCardPaint = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
   }

   if(!objCardValue.hasOwnProperty(first) || !objCardPaint.hasOwnProperty(second)) {
      throw new Error;
   } else {
      let curCardObject = {
         face: first,
         suit: objCardPaint[second],
         toString() {
            let returnCard = `${this.face}${this.suit}`;
            return returnCard;
         }
      }

      return curCardObject;
   }
}

