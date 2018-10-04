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