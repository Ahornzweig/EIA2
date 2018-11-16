var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    var treeSpecies = [{ name: "Tanne", price: 55 }, { name: "Kiefer", price: 60 }, { name: "Plastik Tanne", price: 30 }];
    var holder = [{ name: "Topf", price: 10 }, { name: "Tom", price: 30 }, { name: "Jason", price: 5 }];
    var christmasBall = [{ name: "rot", price: 2 }, { name: "gold", price: 6 }, { name: "glas", price: 1 }];
    var lametta = [{ name: "Gold", price: 10 }, { name: "Gr�n", price: 10 }, { name: "Rot", price: 10 }];
    var candleTyp = [{ name: "Wachs", price: 3 }, { name: "LED", price: 5 }];
    var shipment = [{ name: "DPD", price: 30 }, { name: "DHL", price: 30 }, { name: "UPS", price: 30 }];
    function writeHTML() {
        var node = document.getElementById("fieldset");
        var childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<select name='Select' id='select'>";
        for (var i = 0; i < treeSpecies.length; i++) {
            childNodeHTML += "<option value='" + treeSpecies[i].name + "'>" + treeSpecies[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        node.innerHTML += childNodeHTML;
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=A4Kunde.js.map