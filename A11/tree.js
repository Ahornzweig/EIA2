/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    class Tree extends A11.Origin {
        draw() {
            A11.crc2.fillStyle = "#A52A2A";
            A11.crc2.strokeStyle = "#A52A2A";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x + 5, this.y + 7.5);
            A11.crc2.lineTo(this.x - 5, this.y + 7.5);
            A11.crc2.lineTo(this.x - 5, this.y - 12.5);
            A11.crc2.lineTo(this.x + 5, this.y - 12.5);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = "#228B22";
            A11.crc2.strokeStyle = "#0f7027";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 30, this.y - 10);
            A11.crc2.lineTo(this.x, this.y - 55);
            A11.crc2.lineTo(this.x + 30, this.y - 10);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = "#228B22";
            A11.crc2.strokeStyle = "#0f7027";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 27, this.y - 27.5);
            A11.crc2.lineTo(this.x, this.y - 75);
            A11.crc2.lineTo(this.x + 27, this.y - 27.5);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Tree = Tree;
})(A11 || (A11 = {}));
//# sourceMappingURL=tree.js.map