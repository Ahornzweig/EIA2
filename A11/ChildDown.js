/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    class ChildDown {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.y > 700) {
                this.x = 360;
                this.y = Math.random() * 370 + 330;
            }
            this.draw();
        }
        draw() {
            A11.crc2.strokeStyle = "#8B4513";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x + 30, this.y - 30);
            A11.crc2.lineTo(this.x + 19, this.y - 40);
            A11.crc2.lineTo(this.x + 1, this.y - 20);
            A11.crc2.lineTo(this.x + 7, this.y - 7);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10);
            A11.crc2.stroke();
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.lineWidth = 2.25;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x, this.y - 25);
            A11.crc2.lineTo(this.x - 5, this.y - 50);
            A11.crc2.lineTo(this.x - 25, this.y - 30);
            A11.crc2.moveTo(this.x - 5, this.y - 50);
            A11.crc2.lineTo(this.x - 20, this.y - 25);
            A11.crc2.stroke();
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.fillStyle = "#000000";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 5, this.y - 50);
            A11.crc2.arc(this.x - 10, this.y - 60, 6, 0, 2 * Math.PI);
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.ChildDown = ChildDown;
})(A11 || (A11 = {}));
//# sourceMappingURL=ChildDown.js.map