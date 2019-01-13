var A10;
(function (A10) {
    class Snowflake {
        move() {
            this.y += this.dy;
        }
        draw() {
            A10.crc2.fillStyle = this.color;
            A10.crc2.strokeStyle = this.color;
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 2, this.y + 1);
            A10.crc2.lineTo(this.x, this.y - 2);
            A10.crc2.lineTo(this.x + 2, this.y + 1);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 2, this.y - 1);
            A10.crc2.lineTo(this.x + 2, this.y - 1);
            A10.crc2.lineTo(this.x, this.y + 2);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.Snowflake = Snowflake;
})(A10 || (A10 = {}));
//# sourceMappingURL=Snowflake.js.map