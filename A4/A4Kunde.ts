namespace A4 {
    document.addEventListener("DOMContentLoaded", fillFieldset);

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;
        //Bäume
        childNodeHTML = "Baum";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Baume'>";
        for (let i: number = 0; i < treeSpecies.length; i++) {

            childNodeHTML += "<option value='" + treeSpecies[i].name + "'>" + treeSpecies[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Halterung
        childNodeHTML += "Halterung";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='radio" + i + "' id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + holder[i].name + "</label>";
        }
        childNodeHTML += "<br>";

        //Glaskugeln
        childNodeHTML += "Glaskugeln";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 0; i < christmasBall.length; i++) {

            childNodeHTML += "<option value='" + christmasBall[i].name + "'>" + christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 1; i < 51; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Lametta
        childNodeHTML += "Lametta";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 0; i < lametta.length; i++) {

            childNodeHTML += "<option value='" + lametta[i].name + "'>" + lametta[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Laenge in Meter";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 1; i < 6; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Kerzen
        childNodeHTML += "Kerzen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 0; i < candleTyp.length; i++) {

            childNodeHTML += "<option value='" + candleTyp[i].name + "'>" + candleTyp[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 1; i < 21; i++) {

            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Lieferoptionen
        childNodeHTML += "Lieferoptionen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 0; i < shipment.length; i++) {

            childNodeHTML += "<option value='" + shipment[i].name + "'>" + shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Adresse
        childNodeHTML += "Adresse";
        childNodeHTML += "<br>";
        childNodeHTML += "<input type='text' name='Text' placeholder='enter adress here' required/>"

        node.innerHTML += childNodeHTML;
    }

    let fieldset: HTMLElement = document.getElementById("fieldset")

    fieldset.addEventListener("change", handleChange);

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target
        let checkoutAttribute: string= target.getAttribute("value");
        if (target.id == "Baume") {
            let node: HTMLElement = document.getElementById("tree")

            let childNodeHTML: string;
            
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += checkoutAttribute;
            childNodeHTML += "</a>";
            
            node.innerHTML += childNodeHTML;
        }
        //let checkout: HTMLElement = document.getElementById("div")

    }

}