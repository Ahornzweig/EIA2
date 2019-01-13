var A10;
(function (A10) {
    class ChildDown {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            /*if (this.x > 700) {
                this.x = 0;
            }
            this.draw();*/
        }
        draw() {
            A10.crc2.strokeStyle = "#8B4513";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x + 30, this.y - 30);
            A10.crc2.lineTo(this.x + 19, this.y - 40);
            A10.crc2.lineTo(this.x + 1, this.y - 20);
            A10.crc2.lineTo(this.x + 7, this.y - 7);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 2.25;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x, this.y - 25);
            A10.crc2.lineTo(this.x - 5, this.y - 50);
            A10.crc2.lineTo(this.x - 25, this.y - 30);
            A10.crc2.moveTo(this.x - 5, this.y - 50);
            A10.crc2.lineTo(this.x - 20, this.y - 25);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.fillStyle = "#000000";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 5, this.y - 50);
            A10.crc2.arc(this.x - 10, this.y - 60, 6, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.ChildDown = ChildDown;
})(A10 || (A10 = {}));
//# sourceMappingURL=ChildDown.js.map