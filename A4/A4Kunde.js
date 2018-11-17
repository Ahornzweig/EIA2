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
    function fillFieldset() {
        var node = document.getElementById("fieldset");
        var childNodeHTML;
        //B�ume
        childNodeHTML = "Baum";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (var i = 0; i < A4.treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + i + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro'>" + A4.treeSpecies[i].name + " " + A4.treeSpecies[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Halterung
        childNodeHTML += "Halterung";
        childNodeHTML += "<br>";
        for (var i = 0; i < A4.holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + A4.holder[i].name + " " + A4.holder[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + A4.holder[i].name + " " + A4.holder[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Glaskugeln
        childNodeHTML += "Glaskugeln";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (var i = 0; i < A4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro'>" + A4.christmasBall[i].name + " " + A4.christmasBall[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Anzahl in Stueck";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (var i = 1; i < 51; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lametta
        childNodeHTML += "Lametta";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (var i = 0; i < A4.lametta.length; i++) {
            childNodeHTML += "<option value='" + i + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro'>" + A4.lametta[i].name + " " + A4.lametta[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Laenge in Meter";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (var i = 1; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Kerzen
        childNodeHTML += "Kerzen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (var i = 0; i < A4.candleTyp.length; i++) {
            childNodeHTML += "<option value='" + i + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro'>" + A4.candleTyp[i].name + " " + A4.candleTyp[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Anzahl in Stueck";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (var i = 1; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "Lieferoptionen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (var i = 0; i < A4.shipment.length; i++) {
            childNodeHTML += "<option value='" + i + A4.shipment[i].name + " " + A4.shipment[i].price + " Euro'>" + A4.shipment[i].name + " " + A4.shipment[i].price + "Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "Adresse";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        var target = _event.target;
        //trees
        if (target.id == "trees") {
            var node = document.getElementById("tree");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTree = A4.treeSpecies[priceIndex].price;
            //console.log(priceTree);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //halterung
        if (target.name == "Radiogroup") {
            var node = document.getElementById("holder");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceHolder = A4.holder[priceIndex].price;
            console.log(priceHolder);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //balls
        if (target.id == "kugeln") {
            var node = document.getElementById("ball");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceBalls = A4.christmasBall[priceIndex].price;
            console.log(priceBalls);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge1") {
            var node = document.getElementById("ballMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfBalls = numIndex;
            console.log(numberOfBalls);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lametta
        if (target.id == "lametten") {
            var node = document.getElementById("lametta");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceLametta = A4.lametta[priceIndex].price;
            console.log(priceLametta);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge2") {
            var node = document.getElementById("lamettaMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfLametta = numIndex;
            console.log(numberOfLametta);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Kerzen
        if (target.id == "candles") {
            var node = document.getElementById("candle");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandle = A4.candleTyp[priceIndex].price;
            console.log(priceCandle);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge3") {
            var node = document.getElementById("candleMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfCandle = numIndex;
            console.log(numberOfCandle);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            var node = document.getElementById("shipping");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceShipping = A4.shipment[priceIndex].price;
            console.log(priceShipping);
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adresse
        if (target.id == "ad") {
            var node = document.getElementById("adress");
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        var node2 = document.getElementById("price");
        var childNodeHTML2;
        childNodeHTML2 = "";
        childNodeHTML2 += "<a>";
        childNodeHTML2 += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
        childNodeHTML2 += " Euro";
        childNodeHTML2 += "</a>";
        node2.innerHTML = childNodeHTML2;
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=A4Kunde.js.map