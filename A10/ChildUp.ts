namespace A10 {
    export class ChildUp {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 360) {
                this.x = 360;
                this.y = Math.random() * 370 + 330;
            }
            this.draw();
        }

        draw(): void {

            console.log("Julia");

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(200, 510);
            crc2.lineTo(230, 485);
            crc2.moveTo(210, 503);
            crc2.lineTo(200, 490);
            crc2.moveTo(220, 494);
            crc2.lineTo(211, 481);
            crc2.moveTo(190, 498);
            crc2.lineTo(220, 473);
            crc2.moveTo(230, 485);
            crc2.quadraticCurveTo(250, 470, 230, 470);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2.25;

            crc2.beginPath();
            crc2.moveTo(250, 470);
            crc2.lineTo(252, 450);
            crc2.lineTo(262, 465);
            crc2.moveTo(252, 450);
            crc2.lineTo(252, 430);
            crc2.lineTo(247, 450);
            crc2.lineTo(230, 470);
            crc2.moveTo(252, 430);
            crc2.lineTo(260, 450);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(252, 430);
            crc2.arc(252, 422, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }
    }
}