var A10;
(function (A10) {
    class ChildDown {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            A10.crc2.strokeStyle = "#8B4513";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x + 30, this.y + 25);
            A10.crc2.moveTo(this.x + 10, this.y - 7);
            A10.crc2.lineTo(this.x, this.y - 20);
            A10.crc2.moveTo(this.x + 20, this.y - 16);
            A10.crc2.lineTo(this.x + 11, this.y + 29);
            A10.crc2.moveTo(this.x - 10, this.y + 12);
            A10.crc2.lineTo(this.x + 20, this.y + 37);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.quadraticCurveTo(this.x - 20, this.y + 20, this.x - 10, this.y - 5);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 2.25;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 10, this.y - 15);
            A10.crc2.lineTo(this.x + 5, this.y + 28);
            A10.crc2.lineTo(this.x + 5, this.y + 50);
            A10.crc2.lineTo(this.x - 20, this.y + 40);
            A10.crc2.moveTo(this.x + 5, this.y + 50);
            A10.crc2.lineTo(this.x - 20, this.y + 30);
            A10.crc2.moveTo(this.x - 10, this.y + 15);
            A10.crc2.lineTo(this.x - 15, this.y);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.fillStyle = "#000000";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x + 5, this.y + 50);
            A10.crc2.arc(this.x, this.y + 60, 6, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.ChildDown = ChildDown;
})(A10 || (A10 = {}));
//# sourceMappingURL=ChildDown.js.map