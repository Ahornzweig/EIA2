namespace A4 {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", init);

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;
        //Bäume
        childNodeHTML = "Baum";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i: number = 0; i < treeSpecies.length; i++) {

            childNodeHTML += "<option value='" + treeSpecies[i].name + "'>" + treeSpecies[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Halterung
        childNodeHTML += "Halterung";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" +holder[i].name +"'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + holder[i].name + "</label>";
        }
        childNodeHTML += "<br>";

        //Glaskugeln
        childNodeHTML += "Glaskugeln";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (let i: number = 0; i < christmasBall.length; i++) {

            childNodeHTML += "<option value='" + christmasBall[i].name + "'>" + christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (let i: number = 1; i < 51; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Lametta
        childNodeHTML += "Lametta";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (let i: number = 0; i < lametta.length; i++) {

            childNodeHTML += "<option value='" + lametta[i].name + "'>" + lametta[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Laenge in Meter";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (let i: number = 1; i < 6; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Kerzen
        childNodeHTML += "Kerzen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i: number = 0; i < candleTyp.length; i++) {

            childNodeHTML += "<option value='" + candleTyp[i].name + "'>" + candleTyp[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (let i: number = 1; i < 21; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Lieferoptionen
        childNodeHTML += "Lieferoptionen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i: number = 0; i < shipment.length; i++) {

            childNodeHTML += "<option value='" + shipment[i].name + "'>" + shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Adresse
        childNodeHTML += "Adresse";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>"

        node.innerHTML += childNodeHTML;
    }
    //Change Listener
    function init(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")

        fieldset.addEventListener("change", handleChange);
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target
        //trees
        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("tree")
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
         //halterung
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("holder")
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "kugeln") {
            let node: HTMLElement = document.getElementById("ball")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Menge1") {
            let node: HTMLElement = document.getElementById("ballMenge")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Lametta
        if (target.id == "lametten") {
            let node: HTMLElement = document.getElementById("lametta")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Menge2") {
            let node: HTMLElement = document.getElementById("lamettaMenge")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Kerzen
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candle")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "Menge3") {
            let node: HTMLElement = document.getElementById("candleMenge")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            let node: HTMLElement = document.getElementById("shipping")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        //Adresse
        if (target.id == "ad") {
            let node: HTMLElement = document.getElementById("adress")

            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

    }

}