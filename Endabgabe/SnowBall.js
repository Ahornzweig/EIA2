var Finaly;
(function (Finaly) {
    class SnowBall extends Finaly.Movement {
        draw() {
            if (this.state == "throw") {
                this.throwSB();
            }
            if (this.state == "hit") {
                this.hit();
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
        hit() {
        }
    }
    Finaly.SnowBall = SnowBall;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=SnowBall.js.map