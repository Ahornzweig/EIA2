function writeHTML() {
    var node = document.getElementById("main");
    var childNodeHTML;
    var input = prompt("Bitte geben Sie Ihren Namen ein:");
    var b = String(input);
    if (b != null) {
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += "Hallo: " + b;
        childNodeHTML += "</a>";
        node.innerHTML += childNodeHTML;
    }
    console.log("Name: " + b);
    console.log("Hallo: " + b);
}
document.addEventListener('DOMContentLoaded', writeHTML);
//# sourceMappingURL=A0.js.map