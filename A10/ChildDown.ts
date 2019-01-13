namespace A10 {
    export class ChildDown {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y + 25);
            crc2.moveTo( this.x + 10, this.y - 7);
            crc2.lineTo( this.x, this.y - 20);
            crc2.moveTo( this.x + 20, this.y - 16);
            crc2.lineTo( this.x + 11, this.y + 29);
            crc2.moveTo( this.x - 10, this.y + 12);
            crc2.lineTo( this.x + 20, this.y + 37);
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo( this.x - 20, this.y + 20, this.x - 10, this.y - 5);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2.25;

            crc2.beginPath();
            crc2.moveTo( this.x - 10, this.y - 15);
            crc2.lineTo( this.x + 5, this.y + 28);
            crc2.lineTo(this.x + 5, this.y + 50);
            crc2.lineTo( this.x - 20, this.y + 40);
            crc2.moveTo(this.x + 5, this.y + 50);
            crc2.lineTo( this.x - 20, this.y + 30);
            crc2.moveTo( this.x - 10, this.y + 15);
            crc2.lineTo(this.x - 15, this.y);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 50);
            crc2.arc(this.x, this.y + 60, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }
    }
}