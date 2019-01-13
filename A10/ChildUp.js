var A10;
(function (A10) {
    class ChildUp {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 360) {
                this.x = 360;
                this.y = Math.random() * 370 + 330;
            }
            this.draw();
        }
        draw() {
            console.log("Julia");
            A10.crc2.strokeStyle = "#8B4513";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(200, 510);
            A10.crc2.lineTo(230, 485);
            A10.crc2.moveTo(210, 503);
            A10.crc2.lineTo(200, 490);
            A10.crc2.moveTo(220, 494);
            A10.crc2.lineTo(211, 481);
            A10.crc2.moveTo(190, 498);
            A10.crc2.lineTo(220, 473);
            A10.crc2.moveTo(230, 485);
            A10.crc2.quadraticCurveTo(250, 470, 230, 470);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 2.25;
            A10.crc2.beginPath();
            A10.crc2.moveTo(250, 470);
            A10.crc2.lineTo(252, 450);
            A10.crc2.lineTo(262, 465);
            A10.crc2.moveTo(252, 450);
            A10.crc2.lineTo(252, 430);
            A10.crc2.lineTo(247, 450);
            A10.crc2.lineTo(230, 470);
            A10.crc2.moveTo(252, 430);
            A10.crc2.lineTo(260, 450);
            A10.crc2.stroke();
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.fillStyle = "#000000";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(252, 430);
            A10.crc2.arc(252, 422, 6, 0, 2 * Math.PI);
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.ChildUp = ChildUp;
})(A10 || (A10 = {}));
//# sourceMappingURL=ChildUp.js.map