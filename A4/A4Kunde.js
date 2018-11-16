var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    function fillFieldset() {
        var node = document.getElementById("fieldset");
        var childNodeHTML;
        //B�ume
        childNodeHTML = "Baum";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='Baume'>";
        for (var i = 0; i < A4.treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + A4.treeSpecies[i].name + "'>" + A4.treeSpecies[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Halterung
        childNodeHTML += "Halterung";
        childNodeHTML += "<br>";
        for (var i = 0; i < A4.holder.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='radio" + i + "' id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + A4.holder[i].name + "</label>";
        }
        childNodeHTML += "<br>";
        //Glaskugeln
        childNodeHTML += "Glaskugeln";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 0; i < A4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + A4.christmasBall[i].name + "'>" + A4.christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 1; i < 51; i++) {
            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Lametta
        childNodeHTML += "Lametta";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 0; i < A4.lametta.length; i++) {
            childNodeHTML += "<option value='" + A4.lametta[i].name + "'>" + A4.lametta[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Laenge in Meter";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 1; i < 6; i++) {
            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Kerzen
        childNodeHTML += "Kerzen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 0; i < A4.candleTyp.length; i++) {
            childNodeHTML += "<option value='" + A4.candleTyp[i].name + "'>" + A4.candleTyp[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "Menge";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 1; i < 21; i++) {
            childNodeHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Lieferoptionen
        childNodeHTML += "Lieferoptionen";
        childNodeHTML += "<br>";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 0; i < A4.shipment.length; i++) {
            childNodeHTML += "<option value='" + A4.shipment[i].name + "'>" + A4.shipment[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "Adresse";
        childNodeHTML += "<br>";
        childNodeHTML += "<input type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    var fieldset = document.getElementById("fieldset");
    fieldset.addEventListener("change", handleChange);
    function handleChange(_event) {
        var target = _event.target;
        var checkoutAttribute = target.getAttribute("value");
        if (target.id == "Baume") {
            var node = document.getElementById("tree");
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += checkoutAttribute;
            childNodeHTML += "</a>";
        }
        //let checkout: HTMLElement = document.getElementById("div")
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=A4Kunde.js.map