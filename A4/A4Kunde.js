/*Aufgabe: Aufgabe 4
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 17.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    var priceTree = 0;
    var priceHolder = 0;
    var priceBalls = 0;
    var priceLametta = 0;
    var priceCandle = 0;
    var priceShipping = 0;
    var numberOfBalls = 0;
    var numberOfLametta = 0;
    var numberOfCandle = 0;
    var adress = "";
    function fillFieldset() {
        var node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        var childNodeHTML;
        //B�ume
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (var i = 0; i < A4.treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + i + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro'>" + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Halterung
        childNodeHTML += "<h3>Halterung</h3>";
        for (var i = 0; i < A4.holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + A4.holder[i].name + " " + A4.holder[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + A4.holder[i].name + " " + A4.holder[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Glaskugeln
        childNodeHTML += "<h3>Kugeln</h3>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (var i = 0; i < A4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro'>" + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (var i = 0; i < 51; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (var i = 0; i < A4.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro'>" + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Laenge in Meter</h3>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (var i = 0; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Kerzen
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (var i = 0; i < A4.candleTyp.length; i++) {
            childNodeHTML += "<option value='" + i + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro'>" + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (var i = 0; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (var i = 0; i < A4.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + A4.shipment[i].name + " " + A4.shipment[i].price + " Euro'>" + A4.shipment[i].name + " " + A4.shipment[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        var target = _event.target;
        //trees
        if (target.id == "trees") {
            var node_1 = document.getElementById("tree");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTree = A4.treeSpecies[priceIndex].price;
            //console.log(priceTree);
            var childNodeHTML_1;
            childNodeHTML_1 = "";
            childNodeHTML_1 += "<a>";
            childNodeHTML_1 += " " + value.substr(1);
            childNodeHTML_1 += "</a>";
            node_1.innerHTML = childNodeHTML_1;
        }
        //halterung
        if (target.name == "Radiogroup") {
            var node_2 = document.getElementById("holder");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceHolder = A4.holder[priceIndex].price;
            console.log(priceHolder);
            var childNodeHTML_2;
            childNodeHTML_2 = "";
            childNodeHTML_2 += "<a>";
            childNodeHTML_2 += " " + value.substr(1);
            childNodeHTML_2 += "</a>";
            node_2.innerHTML = childNodeHTML_2;
        }
        //balls
        if (target.id == "kugeln") {
            var node_3 = document.getElementById("ball");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls = A4.christmasBall[priceIndex].price;
            console.log(priceBalls);
            var childNodeHTML_3;
            childNodeHTML_3 = "";
            childNodeHTML_3 += "<a>";
            childNodeHTML_3 += " " + value.substr(1);
            childNodeHTML_3 += "</a>";
            node_3.innerHTML = childNodeHTML_3;
        }
        if (target.id == "Menge1") {
            var node_4 = document.getElementById("ballMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls);
            var childNodeHTML_4;
            childNodeHTML_4 = "";
            childNodeHTML_4 += "<a>";
            childNodeHTML_4 += " " + target.value;
            childNodeHTML_4 += "</a>";
            node_4.innerHTML = childNodeHTML_4;
        }
        //Lametta
        if (target.id == "lametten") {
            var node_5 = document.getElementById("lametta");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceLametta = A4.lametta[priceIndex].price;
            console.log(priceLametta);
            var childNodeHTML_5;
            childNodeHTML_5 = "";
            childNodeHTML_5 += "<a>";
            childNodeHTML_5 += " " + value.substr(1);
            childNodeHTML_5 += "</a>";
            node_5.innerHTML = childNodeHTML_5;
        }
        if (target.id == "Menge2") {
            var node_6 = document.getElementById("lamettaMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta);
            var childNodeHTML_6;
            childNodeHTML_6 = "";
            childNodeHTML_6 += "<a>";
            childNodeHTML_6 += " " + target.value;
            childNodeHTML_6 += "</a>";
            node_6.innerHTML = childNodeHTML_6;
        }
        //Kerzen
        if (target.id == "candles") {
            var node_7 = document.getElementById("candle");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandle = A4.candleTyp[priceIndex].price;
            console.log(priceCandle);
            var childNodeHTML_7;
            childNodeHTML_7 = "";
            childNodeHTML_7 += "<a>";
            childNodeHTML_7 += " " + value.substr(1);
            childNodeHTML_7 += "</a>";
            node_7.innerHTML = childNodeHTML_7;
        }
        if (target.id == "Menge3") {
            var node_8 = document.getElementById("candleMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            var childNodeHTML_8;
            childNodeHTML_8 = "";
            childNodeHTML_8 += "<a>";
            childNodeHTML_8 += " " + target.value;
            childNodeHTML_8 += "</a>";
            node_8.innerHTML = childNodeHTML_8;
        }
        //Lieferoption
        if (target.id == "ship") {
            var node_9 = document.getElementById("shipping");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceShipping = A4.shipment[priceIndex].price;
            console.log(priceShipping);
            var childNodeHTML_9;
            childNodeHTML_9 = "";
            childNodeHTML_9 += "<a>";
            childNodeHTML_9 += " " + value.substr(1);
            childNodeHTML_9 += "</a>";
            node_9.innerHTML = childNodeHTML_9;
        }
        //Adresse
        if (target.id == "ad") {
            var node_10 = document.getElementById("adress");
            adress = target.value;
            var childNodeHTML_10;
            childNodeHTML_10 = "";
            childNodeHTML_10 += "<a>";
            childNodeHTML_10 += " " + target.value;
            childNodeHTML_10 += "</a>";
            node_10.innerHTML = childNodeHTML_10;
        }
        var node = document.getElementById("price");
        var childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceBalls == 0 || priceLametta == 0 || priceCandle == 0 || priceShipping == 0 || numberOfBalls == 0 || numberOfLametta == 0 || numberOfCandle == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=A4Kunde.js.map