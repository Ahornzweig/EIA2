/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    class Snowflake extends A11.Movement {
        move() {
            super.move();
            if (this.y > 700) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            A11.crc2.fillStyle = "#ffffff";
            A11.crc2.strokeStyle = "#ffffff";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 2, this.y + 1);
            A11.crc2.lineTo(this.x, this.y - 2);
            A11.crc2.lineTo(this.x + 2, this.y + 1);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 2, this.y - 1);
            A11.crc2.lineTo(this.x + 2, this.y - 1);
            A11.crc2.lineTo(this.x, this.y + 2);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Snowflake = Snowflake;
})(A11 || (A11 = {}));
//# sourceMappingURL=Snowflake.js.map