/*Aufgabe: Aufgabe 0
Name: Sarah Lönnqvist
Matrikel: (259116)
Datum: 04.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A0 {

    function Gruss() {
        var a: string = prompt("Wie darf ich dich Nennen?");
        var b:string;

        b = "Ah, Hallo ";
        b += a;
        b += "! Was machst du denn hier?";
        document.getElementById("main").innerHTML+= b;
        console.log("Ah, Hallo", a, "! Was machst du denn hier?" );
    }

    document.addEventListener('DOMContentLoaded', Gruss);

}