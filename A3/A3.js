/*Aufgabe: Aufgabe 2
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 26.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A3;
(function (A3) {
    let hand = [];
    let pile = [];
    let allCards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA", "r+2", "r+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA", "g+2", "g+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA", "b+2", "b+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA", "y+2", "y+2",
        "s+4", "s+4", "s+4", "s+4", "sWahl", "sWahl", "sWahl", "sWahl"];
    function getRandom(_maxNum) {
        return Math.floor(Math.random() * Math.floor(_maxNum));
    }
    function setup() {
        let node = document.getElementById("Hand");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        let div = document.createElement("div");
        div.setAttribute("id", "Hand");
        document.getElementsByTagName("body")[0].appendChild(div);
    }
    function main() {
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
        function draw(_cards) {
            for (let i = 0; i < _cards; i++) {
                let maxNumber = allCards.length;
                let randomNum = getRandom(maxNumber);
                let card = allCards.splice(randomNum, 1)[0];
                hand.push(card);
            }
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
                if (color == "s") {
                    color = "#000000";
                }
                let value = _values[i].substr(1);
                let div = document.createElement("div");
                document.getElementById("Hand").appendChild(div);
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
        function nachziehen() {
            let div = document.getElementById("Nachzieh");
            document.getElementById("Nachzieh").addEventListener("click", drawEvent);
            document.addEventListener("keydown", space);
        }
        nachziehen();
        function drawEvent() {
            draw(1);
            setup();
            createCards(hand);
        }
        function space(_event) {
            var keyCode = _event.keyCode;
            if (keyCode == 32) {
                drawEvent();
            }
        }
        //Sortieren
        function sort() {
            let button = document.getElementById("button");
            button.addEventListener("click", clickSort);
        }
        sort();
        function clickSort() {
            hand.sort();
            setup();
            createCards(hand);
        }
        //Ablegen
        function placeOnPile() {
            let div = document.getElementById("Hand");
            document.getElementById("Hand").addEventListener("click", placeOnPileEvent);
        }
        placeOnPile();
        function placeOnPileEvent(_event) {
            let domCard = _event.target;
            let index = parseInt(domCard.getAttribute("index"));
            let card = hand.splice(index, 1)[0];
            pile.push(card);
            setup();
            createCards(hand);
            createPile(pile);
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
                if (color == "s") {
                    color = "#000000";
                }
                let value = _values[i].substr(1);
                let div = document.createElement("div");
                document.getElementById("Ablage").appendChild(div);
                div.setAttribute("id", "a" + i);
                document.getElementById("a" + i).innerHTML += value;
                let s = div.style;
                s.backgroundColor = color;
                if (color == "#000000" || color == "#0000ff") {
                    s.color = "white";
                }
            }
        }
    }
    document.addEventListener("DOMContentLoaded", (main));
})(A3 || (A3 = {}));
//# sourceMappingURL=A3.js.map