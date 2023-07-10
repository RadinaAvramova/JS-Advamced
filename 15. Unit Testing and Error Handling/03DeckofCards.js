function deckOfCards(arr) {
    function playingCards(face, suit) {
 
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }
 
        if (!faces.includes(face)) {
            throw new Error('Invalid face');
        }
        if (!suits[suit]) {
            throw new Error('Invalid suit')
        }
 
        let result = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        }
        return result;
    }
    let resultArr= [];
    let copyArr = [...arr];
    for (const iterator of copyArr) {
        let current = iterator.split("");
        let suit = current.pop();
        let face = current.reduce((acc, current) => acc + current, "");
        try {
            let cards = playingCards(face, suit);
            resultArr.push(cards.toString());
        } catch {
            console.log(`Invalid card: ${iterator}`);
            return;
        }
    }
    console.log(resultArr.join(" "));
}