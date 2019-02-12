/*Aufgabe: Aufgabe 11
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class Children extends Finaly.Movement {
        draw() {
            if (this.state == "down") {
                this.drawDown();
            }
            if (this.state == "up") {
                this.drawHit();
            }
        }
        move() {
            if (this.state == "down") {
                if (this.y > Finaly.crc2.canvas.height) {
                    this.state = "up";
                }
                else if (this.x < 0) {
                    this.state = "up";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "up") {
                if (this.x > Finaly.crc2.canvas.width) {
                    this.state = "down";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
        }
        drawHit() {
            Finaly.crc2.strokeStyle = "#8B4513";
            Finaly.crc2.lineWidth = 2;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x, this.y);
            Finaly.crc2.lineTo(this.x + 30, this.y - 30);
            Finaly.crc2.lineTo(this.x + 19, this.y - 40);
            Finaly.crc2.lineTo(this.x + 1, this.y - 20);
            Finaly.crc2.lineTo(this.x + 7, this.y - 7);
            Finaly.crc2.moveTo(this.x, this.y);
            Finaly.crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10);
            Finaly.crc2.stroke();
        }
        drawDown() {
            Finaly.crc2.strokeStyle = "#8B4513";
            Finaly.crc2.lineWidth = 2;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x, this.y);
            Finaly.crc2.lineTo(this.x + 30, this.y - 30);
            Finaly.crc2.lineTo(this.x + 19, this.y - 40);
            Finaly.crc2.lineTo(this.x + 1, this.y - 20);
            Finaly.crc2.lineTo(this.x + 7, this.y - 7);
            Finaly.crc2.moveTo(this.x, this.y);
            Finaly.crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10);
            Finaly.crc2.stroke();
            Finaly.crc2.strokeStyle = "#000000";
            Finaly.crc2.lineWidth = 2.25;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x, this.y);
            Finaly.crc2.lineTo(this.x, this.y - 25);
            Finaly.crc2.lineTo(this.x - 5, this.y - 50);
            Finaly.crc2.lineTo(this.x - 25, this.y - 30);
            Finaly.crc2.moveTo(this.x - 5, this.y - 50);
            Finaly.crc2.lineTo(this.x - 20, this.y - 25);
            Finaly.crc2.stroke();
            Finaly.crc2.strokeStyle = "#000000";
            Finaly.crc2.fillStyle = "#000000";
            Finaly.crc2.lineWidth = 2;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x - 5, this.y - 50);
            Finaly.crc2.arc(this.x - 10, this.y - 60, 6, 0, 2 * Math.PI);
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
        }
    }
    Finaly.Children = Children;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=children.js.map