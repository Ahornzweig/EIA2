/*Aufgabe: Aufgabe 11
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A11 {
    export class Children extends Movement { 
    
     moveUp(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 360) {
                this.x = 0;
                this.y = Math.random() *  100 + 750;
            }
            this.draw();
        }

        drawUp(): void {

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 25);
            crc2.moveTo(this.x + 10, this.y - 7);
            crc2.lineTo(this.x, this.y - 20);
            crc2.moveTo(this.x + 20, this.y - 16);
            crc2.lineTo(this.x + 11, this.y - 29);
            crc2.moveTo(this.x - 10, this.y - 12);
            crc2.lineTo(this.x + 20, this.y - 37);
            crc2.moveTo(this.x + 30, this.y - 25);
            crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2.25;

            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y - 40);
            crc2.lineTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 62, this.y - 45);
            crc2.moveTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 52, this.y - 80);
            crc2.lineTo(this.x + 47, this.y - 60);
            crc2.lineTo(this.x + 30, this.y - 40);
            crc2.moveTo(this.x + 52, this.y - 80);
            crc2.lineTo(this.x + 60, this.y - 60);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 52, this.y - 80);
            crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }
        
        moveDown(): void {
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x < 0 || this.y > 700) {
                this.x = 360;
                this.y = Math.random() * 370 + 330;
            }
            this.draw();
        }

        drawDown(): void {

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