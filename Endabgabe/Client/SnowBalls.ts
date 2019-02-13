/*Aufgabe: Endabgabe
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 13.02.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Finaly {
    export class SnowBalls extends Movement {
        radius: number;
        state: string;


        draw(): void {
            if (this.state == "throw") {
                this.throwSB();
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

        hitDown(_x: number, _y: number): boolean {
            
            crc2.lineWidth = 50;
            
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y - 30);
            crc2.lineTo(_x + 19, _y - 40);
            crc2.lineTo(_x + 1, _y - 20);
            crc2.lineTo(_x + 7, _y - 7);
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x - 10, _y + 15, _x - 5, _y - 10); 
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 25);
            crc2.lineTo(_x - 5, _y - 50);
            crc2.lineTo(_x - 25, _y - 30);
            crc2.moveTo(_x - 5, _y - 50);
            crc2.lineTo(_x - 20, _y - 25);
            crc2.moveTo(_x - 5, _y - 50);
            crc2.arc(_x - 10, _y - 60, 6, 0, 2 * Math.PI);
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        
        hitUp(_x: number, _y: number): boolean {
            
            crc2.lineWidth = 50;

            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y - 25);
            crc2.moveTo(_x + 10, _y - 7);
            crc2.lineTo(_x, _y - 20);
            crc2.moveTo(_x + 20, _y - 16);
            crc2.lineTo(_x + 11, _y - 29);
            crc2.moveTo(_x - 10, _y - 12);
            crc2.lineTo(_x + 20, _y - 37);
            crc2.moveTo(_x + 30, _y - 25);
            crc2.quadraticCurveTo(_x + 50, _y - 40, _x + 30, _y - 40);
            crc2.moveTo(_x + 50, _y - 40);
            crc2.lineTo(_x + 52, _y - 60);
            crc2.lineTo(_x + 62, _y - 45);
            crc2.moveTo(_x + 52, _y - 60);
            crc2.lineTo(_x + 52, _y - 80);
            crc2.lineTo(_x + 47, _y - 60);
            crc2.lineTo(_x + 30, _y - 40);
            crc2.moveTo(_x + 52, _y - 80);
            crc2.lineTo(_x + 60, _y - 60);
            crc2.moveTo(_x + 52, _y - 80);
            crc2.arc(_x + 52, _y - 88, 6, 0, 2 * Math.PI);
            
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

}
