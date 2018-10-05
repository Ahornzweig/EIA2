/*Aufgabe: Aufgabe 0
Name: Sarah Lönnqvist
Matrikel: (259116)
Datum: 04.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A0 {

    var a: string;

    function Gruss() {

        var a = prompt("Wie darf ich Sie Nennen?");
        var node: any = document.getElementById("main");

        node.innerHTML = "Ah, Hallo ";
        node.innerHTML += a;
        node.innerHTML += "! Was machst du denn hier?";
        console.log("Ah, Hallo", a, "! Was machst du denn hier?" );
    }

    document.addEventListener('DOMContentLoaded', Gruss);

}