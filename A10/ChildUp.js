/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    class ChildUp {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 360) {
                this.x = 0;
                this.y = Math.random() * 100 + 750;
            }
            this.draw();
        }
        draw() {
            console.log("Julia");
            A10.crc2.strokeStyle = "#8B4513";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x + 30, this.y - 25);
            A10.crc2.moveTo(this.x + 10, this.y - 7);
            A10.crc2.lineTo(this.x, this.y - 20);
            A10.crc2.moveTo(this.x + 20, this.y - 16);
            A10.crc2.lineTo(this.x + 11, this.y - 29);
            A10.crc2.moveTo(this.x - 10, this.y - 12);
            A10.crc2.lineTo(this.x + 20, this.y - 37);
            A10.crc2.moveTo(this.x + 30, this.y - 25);
            A10.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 2.25;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x + 50, this.y - 40);
            A10.crc2.lineTo(this.x + 52, this.y - 60);
            A10.crc2.lineTo(this.x + 62, this.y - 45);
            A10.crc2.moveTo(this.x + 52, this.y - 60);
            A10.crc2.lineTo(this.x + 52, this.y - 80);
            A10.crc2.lineTo(this.x + 47, this.y - 60);
            A10.crc2.lineTo(this.x + 30, this.y - 40);
            A10.crc2.moveTo(this.x + 52, this.y - 80);
            A10.crc2.lineTo(this.x + 60, this.y - 60);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.fillStyle = "#000000";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x + 52, this.y - 80);
            A10.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.ChildUp = ChildUp;
})(A10 || (A10 = {}));
//# sourceMappingURL=ChildUp.js.map