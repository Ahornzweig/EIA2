/*Aufgabe: Aufgabe 10
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A11 {
    export class ChildDown {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x < 0 || this.y > 700) {
                this.x = 360;
                this.y = Math.random() * 370 + 330;
            }
            this.draw();
        }

        draw(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 30);
            crc2.lineTo(this.x + 19, this.y - 40);
            crc2.lineTo(this.x + 1, this.y - 20);
            crc2.lineTo(this.x + 7, this.y - 7);
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 10, this.y + 15, this.x - 5, this.y - 10);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2.25;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 25);
            crc2.lineTo(this.x - 5, this.y - 50);
            crc2.lineTo( this.x - 25, this.y - 30);
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.lineTo( this.x - 20, this.y - 25);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.arc(this.x - 10, this.y - 60, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }
    }
}