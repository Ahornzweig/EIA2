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
            if (this.radius > 10) {
                this.radius -= 1;
            }
        }

        throwSB(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }

        hit(): void {

        }

    }
}