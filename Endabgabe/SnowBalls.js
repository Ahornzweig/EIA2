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
        hit(_x, _y) {
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
            Finaly.crc2.stroke();
            console.log("lul");
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