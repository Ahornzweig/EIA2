/*Aufgabe: Endabgabe
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.02.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class SnowBalls extends Finaly.Movement {
        draw() {
            if (this.state == "throw") {
                this.throwSB();
            }
        }
        move() {
            if (this.radius > 14) {
                this.radius -= 1;
            }
            else {
                this.radius = 0;
            }
        }
        throwSB() {
            Finaly.crc2.fillStyle = "#ffffff";
            Finaly.crc2.strokeStyle = "#000000";
            Finaly.crc2.beginPath();
            Finaly.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
        }
        hitDown(_x, _y) {
            Finaly.crc2.lineWidth = 50;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(_x, _y);
            Finaly.crc2.lineTo(_x + 30, _y - 30);
            Finaly.crc2.lineTo(_x + 19, _y - 40);
            Finaly.crc2.lineTo(_x + 1, _y - 20);
            Finaly.crc2.lineTo(_x + 7, _y - 7);
            Finaly.crc2.moveTo(_x, _y);
            Finaly.crc2.quadraticCurveTo(_x - 10, _y + 15, _x - 5, _y - 10);
            Finaly.crc2.moveTo(_x, _y);
            Finaly.crc2.lineTo(_x, _y - 25);
            Finaly.crc2.lineTo(_x - 5, _y - 50);
            Finaly.crc2.lineTo(_x - 25, _y - 30);
            Finaly.crc2.moveTo(_x - 5, _y - 50);
            Finaly.crc2.lineTo(_x - 20, _y - 25);
            Finaly.crc2.moveTo(_x - 5, _y - 50);
            Finaly.crc2.arc(_x - 10, _y - 60, 6, 0, 2 * Math.PI);
            if (Finaly.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        hitUp(_x, _y) {
            Finaly.crc2.lineWidth = 50;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(_x, _y);
            Finaly.crc2.lineTo(_x + 30, _y - 25);
            Finaly.crc2.moveTo(_x + 10, _y - 7);
            Finaly.crc2.lineTo(_x, _y - 20);
            Finaly.crc2.moveTo(_x + 20, _y - 16);
            Finaly.crc2.lineTo(_x + 11, _y - 29);
            Finaly.crc2.moveTo(_x - 10, _y - 12);
            Finaly.crc2.lineTo(_x + 20, _y - 37);
            Finaly.crc2.moveTo(_x + 30, _y - 25);
            Finaly.crc2.quadraticCurveTo(_x + 50, _y - 40, _x + 30, _y - 40);
            Finaly.crc2.moveTo(_x + 50, _y - 40);
            Finaly.crc2.lineTo(_x + 52, _y - 60);
            Finaly.crc2.lineTo(_x + 62, _y - 45);
            Finaly.crc2.moveTo(_x + 52, _y - 60);
            Finaly.crc2.lineTo(_x + 52, _y - 80);
            Finaly.crc2.lineTo(_x + 47, _y - 60);
            Finaly.crc2.lineTo(_x + 30, _y - 40);
            Finaly.crc2.moveTo(_x + 52, _y - 80);
            Finaly.crc2.lineTo(_x + 60, _y - 60);
            Finaly.crc2.moveTo(_x + 52, _y - 80);
            Finaly.crc2.arc(_x + 52, _y - 88, 6, 0, 2 * Math.PI);
            if (Finaly.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Finaly.SnowBalls = SnowBalls;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=SnowBalls.js.map