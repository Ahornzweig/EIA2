namespace Finaly {
    export class SnowBall extends Movement {
        radius: number;
        state: string;


        draw(): void {
            if (this.state == "throw") {
                this.throwSB();
            }
            if (this.state == "hit") {
                this.hit();
            }
        }

        move(): void {
            if (this.radius > 14) {
                this.radius -= 1;
            } else { this.radius = 0; }
        }

        throwSB(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }

        hit(_x: number, _y: number): boolean {
            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 30);
            crc2.lineTo(this.x + 19, this.y - 40);
            crc2.lineTo(this.x + 1, this.y - 20);
            crc2.lineTo(this.x + 7, this.y - 7);
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10); crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 25);
            crc2.lineTo(this.x - 5, this.y - 50);
            crc2.lineTo(this.x - 25, this.y - 30);
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.lineTo(this.x - 20, this.y - 25);
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.arc(this.x - 10, this.y - 60, 6, 0, 2 * Math.PI);
            crc2.stroke();
            console.log("lul");
            
            if (crc2.isPointInStroke(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

}
