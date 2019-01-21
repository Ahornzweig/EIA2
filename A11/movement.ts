/*Aufgabe: Aufgabe 11
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A11 {
    export class Movement extends Origin {
        dx: number;
        dy: number;
        color: string;
        move(): void {
            super.move();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}