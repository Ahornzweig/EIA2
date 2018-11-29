/*Aufgabe: Aufgabe 3
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 10.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A3;
(function (A3) {
    document.addEventListener("DOMContentLoaded", (uno));
    function instalListener() {
        document.getElementById("Nachzieh").addEventListener("click", clickDraw);
        document.addEventListener("keydown", spaceDraw);
        let button = document.getElementById("button");
        button.addEventListener("click", clickSort);
        document.getElementById("Hand").addEventListener("click", placeOnPile);
    }
    instalListener();
    let hand = [];
    let pile = [];
    let allCards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA", "r+2", "r+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA", "g+2", "g+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA", "b+2", "b+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA", "y+2", "y+2",
        "z+4", "z+4", "z+4", "z+4", "zWahl", "zWahl", "zWahl", "zWahl"];
    //math.random
    function getRandom(_maxNum) {
        return Math.floor(Math.random() * Math.floor(_maxNum));
    }
    function uno() {
        let handCards = parseInt(prompt("Wie viele Karten willst du? (max 10)"));
        if (handCards > 10) {
            handCards = 10;
        }
        for (let i = 0; i < handCards; i++) {
            let maxNumber = allCards.length;
            let randomNum = getRandom(maxNumber);
            let card = allCards.splice(randomNum, 1)[0];
            hand.push(card);
        }
        createCards(hand);
    }
    function createCards(_values) {
        for (let i = 0; i < _values.length; i++) {
            let color = _values[i].substr(0, 1);
            if (color == "r") {
                color = "#ff0000";
            }
            if (color == "g") {
                color = "#00ff00";
            }
            if (color == "b") {
                color = "#0000ff";
            }
            if (color == "y") {
                color = "#ffff00";
            }
            if (color == "z") {
                color = "#000000";
            }
            let value = _values[i].substr(1);
            let div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.setAttribute("class", "inHand");
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += value;
            let s = div.style;
            s.backgroundColor = color;
            if (color == "#000000" || color == "#0000ff") {
                s.color = "white";
            }
        }
    }
    //Nachziehen
    function draw(_cards) {
        if (allCards.length > 0) {
            for (let i = 0; i < _cards; i++) {
                let maxNumber = allCards.length;
                let randomNum = getRandom(maxNumber);
                let card = allCards.splice(randomNum, 1)[0];
                hand.push(card);
            }
        }
    }
    function clickDraw() {
        draw(1);
        setupHand();
        createCards(hand);
        instalListener();
    }
    function spaceDraw(_event) {
        let keyCode = _event.keyCode;
        if (keyCode == 32) {
            clickDraw();
        }
    }
    //Sortieren
    function clickSort() {
        hand.sort();
        setupHand();
        createCards(hand);
        instalListener();
    }
    //Ablegen
    function placeOnPile(_event) {
        console.log(_event);
        let handCards = document.getElementById("Hand");
        let domCard = _event.target;
        if (domCard != handCards) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(1);
            index = parseInt(domAttribute);
            let card = hand.splice(index, 1)[0];
            pile.push(card);
            setupHand();
            createCards(hand);
            setupPile();
            createPile(pile);
            instalListener();
        }
    }
    function createPile(_values) {
        for (let i = 0; i < _values.length; i++) {
            let color = _values[i].substr(0, 1);
            if (color == "r") {
                color = "#ff0000";
            }
            if (color == "g") {
                color = "#00ff00";
            }
            if (color == "b") {
                color = "#0000ff";
            }
            if (color == "y") {
                color = "#ffff00";
            }
            if (color == "z") {
                color = "#000000";
            }
            let value = _values[i].substr(1);
            let div = document.createElement("div");
            document.getElementById("Ablage").appendChild(div);
            div.setAttribute("class", "onPile");
            div.setAttribute("id", "b" + i);
            document.getElementById("b" + i).innerHTML += value;
            let s = div.style;
            s.backgroundColor = color;
            s.zIndex = "0" + i;
            if (color == "#000000" || color == "#0000ff") {
                s.color = "white";
            }
        }
    }
    //hand leeren
    function setupHand() {
        let node = document.getElementById("Hand");
        node.innerHTML = "Hand";
    }
    //ablage leeren
    function setupPile() {
        let node = document.getElementById("Ablage");
        node.innerHTML = "Ablage";
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=A3.js.map