namespace A4 {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);
    }

    let priceTree: number = 0;
    let priceHolder: number = 0;
    let priceBalls: number = 0;
    let priceLametta: number = 0;
    let priceCandle: number = 0;
    let priceShipping: number = 0

    let numberOfBalls: number = 0;
    let numberOfLametta: number = 0;
    let numberOfCandle: number = 0;


    function fillFieldset(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;
        //B�ume
        childNodeHTML = "Baum";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i: number = 0; i < treeSpecies.length; i++) {

            childNodeHTML += "<option value='" + i + treeSpecies[i].name + " " + treeSpecies[i].price + " Euro'>" + treeSpecies[i].name + " " + treeSpecies[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        //Halterung
        childNodeHTML += "Halterung";
        childNodeHTML += "<br>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + holder[i].name + " " + holder[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + holder[i].name + " " + holder[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";

        //Glaskugeln
        childNodeHTML += "Glaskugeln";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (let i: number = 0; i < christmasBall.length; i++) {

            childNodeHTML += "<option value='" + i + christmasBall[i].name + " " + christmasBall[i].price + " Euro'>" + christmasBall[i].name + " " + christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Anzahl in Stueck";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (let i: number = 1; i < 51; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        //Lametta
        childNodeHTML += "Lametta";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (let i: number = 0; i < lametta.length; i++) {

            childNodeHTML += "<option value='" + i + lametta[i].name + " " + lametta[i].price + " Euro'>" + lametta[i].name + " " + lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Laenge in Meter";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (let i: number = 1; i < 6; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        //Kerzen
        childNodeHTML += "Kerzen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i: number = 0; i < candleTyp.length; i++) {

            childNodeHTML += "<option value='" + i + candleTyp[i].name + " " + candleTyp[i].price + " Euro'>" + candleTyp[i].name + " " + candleTyp[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "Anzahl in Stueck";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (let i: number = 1; i < 21; i++) {

            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        //Lieferoptionen
        childNodeHTML += "Lieferoptionen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i: number = 0; i < shipment.length; i++) {

            childNodeHTML += "<option value='" + i + shipment[i].name + " " + shipment[i].price + " Euro'>" + shipment[i].name + " " + shipment[i].price + "Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Adresse
        childNodeHTML += "Adresse";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>"

        node.innerHTML += childNodeHTML;
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target
        //trees
        if (target.id == "trees") {
            let node: HTMLElement = document.getElementById("tree");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTree = treeSpecies[priceIndex].price
            //console.log(priceTree);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        //halterung
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("holder")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceHolder = holder[priceIndex].price
            console.log(priceHolder)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "kugeln") {
            let node: HTMLElement = document.getElementById("ball")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceBalls = christmasBall[priceIndex].price
            console.log(priceBalls)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge1") {
            let node: HTMLElement = document.getElementById("ballMenge")
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls)
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
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceLametta = lametta[priceIndex].price
            console.log(priceLametta)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge2") {
            let node: HTMLElement = document.getElementById("lamettaMenge")
            let value: string = target.value
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta)
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
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandle = candleTyp[priceIndex].price
            console.log(priceCandle)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge3") {
            let node: HTMLElement = document.getElementById("candleMenge")
            let value: string = target.value
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle)
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
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceShipping = shipment[priceIndex].price
            console.log(priceShipping)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
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
        let node2: HTMLElement = document.getElementById("price");
        let childNodeHTML2: string;

        childNodeHTML2 = "";
        childNodeHTML2 += "<a>";
        childNodeHTML2 += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML2 += " Euro";
        childNodeHTML2 += "</a>";
        node2.innerHTML = childNodeHTML2;
    }

}