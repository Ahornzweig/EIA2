/*Aufgabe: Aufgabe 2
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 26.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A2b {

    let allCards: string[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rR", "rR", "rA", "rA",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gR", "gR", "gA", "gA",
        "b0", "b1", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bR", "bR", "bA", "bA",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yR", "yR", "yA", "yA",
        "s+4", "s+4", "s+4", "s+4", "sWahl", "sWahl", "sWahl", "sWahl"];
    
    function main(): void {
        let handKarten: number = parseInt(prompt("Wie viele Karten?"));

        let maxNumber: number = allCards.length;

        for (let i: number = 0; i < handKarten; i++) {

            let randomNum: number = getRandom(maxNumber);

            function getRandom(_maxNum: number): number {
                return Math.floor(Math.random() * Math.floor(_maxNum));
            }

            let color: string = allCards[randomNum].substr(0, 1);

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

            let value: string = allCards[randomNum].substr(1);

            createCardas(color, value, i);
            allCards.splice(randomNum, 1);
        }

        function createCardas(_color: string, _n: string, _i: number): void {

            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _i);
            document.getElementById("a" + _i).innerHTML += _n;

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = _color;
            s.left = (_i + 0.5) * 140 + "px";

            if (_color == "#000000" || _color == "#0000ff") {
                s.color = "white";
            }
        }
    }
    document.addEventListener("DOMContentLoaded", (main));
}