var A0;
(function (A0) {
    var a;
    function Gruss() {
        var a = prompt("Wie darf ich Sie Nennen?");
        var node = document.getElementById("main");
        node.innerHTML = "Ah, Hallo ";
        node.innerHTML += a;
        node.innerHTML += "! Was machst du denn hier?";
        console.log("Ah, Hallo", a, "! Was machst du denn hier?");
    }
    document.addEventListener('DOMContentLoaded', Gruss);
})(A0 || (A0 = {}));
//# sourceMappingURL=A0.js.map