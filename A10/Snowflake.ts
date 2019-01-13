/*Aufgabe: Aufgabe 10
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A10 {
    export class Snowflake {
        x: number;
        y: number;
        dy: number;
        color: string;

        move(): void {
            this.y += this.dy;
            
            if (this.y > 700) {
                this.y = 0;
            }
            this.draw();
        }

        draw(): void {

            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y + 1);
            crc2.lineTo(this.x, this.y - 2);
            crc2.lineTo(this.x + 2, this.y + 1);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y - 1);
            crc2.lineTo(this.x + 2, this.y - 1);
            crc2.lineTo(this.x, this.y + 2);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
    }
}