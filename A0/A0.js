/*Aufgabe: Aufgabe 0
Name: Sarah L�nnqvist
Matrikel: (259116)
Datum: 04.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A0;
(function (A0) {
    function Gruss() {
        var a = prompt("Wie darf ich dich Nennen?");
        var b;
        b = "Ah, Hallo ";
        b += a;
        b += "! Was machst du denn hier?";
        document.getElementById("main").innerHTML += b;
        console.log("Ah, Hallo", a, "! Was machst du denn hier?");
    }
    document.addEventListener('DOMContentLoaded', Gruss);
})(A0 || (A0 = {}));
//# sourceMappingURL=A0.js.map