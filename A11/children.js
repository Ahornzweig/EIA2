/*Aufgabe: Aufgabe 11
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    class Children extends A11.Movement {
        draw() {
            if (this.state == "down") {
                this.drawDown();
            }
            if (this.state == "up") {
                this.drawUp();
            }
        }
        move() {
            if (this.state == "down") {
                if (this.y > A11.crc2.canvas.height) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "up";
                }
                else if (this.x < 0) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "up";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "up") {
                if (this.x > A11.crc2.canvas.width) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
        }
        drawUp() {
            A11.crc2.strokeStyle = "#8B4513";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x + 30, this.y - 25);
            A11.crc2.moveTo(this.x + 10, this.y - 7);
            A11.crc2.lineTo(this.x, this.y - 20);
            A11.crc2.moveTo(this.x + 20, this.y - 16);
            A11.crc2.lineTo(this.x + 11, this.y - 29);
            A11.crc2.moveTo(this.x - 10, this.y - 12);
            A11.crc2.lineTo(this.x + 20, this.y - 37);
            A11.crc2.moveTo(this.x + 30, this.y - 25);
            A11.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            A11.crc2.stroke();
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.lineWidth = 2.25;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x + 50, this.y - 40);
            A11.crc2.lineTo(this.x + 52, this.y - 60);
            A11.crc2.lineTo(this.x + 62, this.y - 45);
            A11.crc2.moveTo(this.x + 52, this.y - 60);
            A11.crc2.lineTo(this.x + 52, this.y - 80);
            A11.crc2.lineTo(this.x + 47, this.y - 60);
            A11.crc2.lineTo(this.x + 30, this.y - 40);
            A11.crc2.moveTo(this.x + 52, this.y - 80);
            A11.crc2.lineTo(this.x + 60, this.y - 60);
            A11.crc2.stroke();
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.fillStyle = "#000000";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x + 52, this.y - 80);
            A11.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            A11.crc2.fill();
            A11.crc2.stroke();
        }
        drawDown() {
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
    A11.Children = Children;
})(A11 || (A11 = {}));
//# sourceMappingURL=children.js.map