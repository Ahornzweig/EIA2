/*Aufgabe: Aufgabe 11
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A11;
(function (A11) {
    class Movement extends A11.Origin {
        move() {
            super.move();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    A11.Movement = Movement;
})(A11 || (A11 = {}));
//# sourceMappingURL=movement.js.map