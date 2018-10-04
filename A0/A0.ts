
function writeHTML(): void {

    var node: any = document.getElementById("main");
    var childNodeHTML: string;

    var input: string = prompt("Bitte geben Sie Ihren Namen ein:");
    var b = String(input);

    if (b != null) {

        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += "Hallo: " + b;
        childNodeHTML += "</a>";

        node.innerHTML += childNodeHTML;

    }

    console.log("Name: " + b)
    console.log("Hallo: " + b);
}

document.addEventListener('DOMContentLoaded', writeHTML);
