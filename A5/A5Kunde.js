/*Aufgabe: Aufgabe 5
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 21.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A5;
(function (A5) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", fillFieldset2);
    document.addEventListener("DOMContentLoaded", changeListener);
    function init(_event) {
        console.log(A5.assoProducts);
        displayAssoArray(A5.assoProducts);
    }
    ;
    function displayAssoArray(_assoArray) {
        for (var key in _assoArray) {
            var value = _assoArray[key];
            if (key == "treeSpecies" || key == "holder" || key == "shipment") {
                for (var i = 0; i < value.length; i++)
                    fillFieldsetCheck(value[i], i, key);
            }
            if (key != "treeSpecies" && key != "holder" && key != "shipment") {
                for (var i = 0; i < value.length; i++)
                    fillFieldset(value[i], i, key);
            }
        }
    }
    //Change Listener
    function changeListener(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    var adress = "";
    var checkTree = 0;
    var checkHolder = 0;
    var checkShipping = 0;
    function fillFieldsetCheck(_products, i, key) {
        var node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        var childNodeHTML;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", "0");
        radio.setAttribute("title", _products.name);
        radio.setAttribute("price", _products.price.toFixed());
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name);
        document.getElementById(key).appendChild(radio);
        var radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", _products.name);
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro";
        document.getElementById(key).appendChild(radioLabel);
    }
    function fillFieldset(_products, i, key) {
        var node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        var childNodeHTML;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }
        var option = document.createElement("p");
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option);
        var steper = document.createElement("input");
        steper.setAttribute("type", "number");
        steper.setAttribute("name", " Stepper");
        steper.setAttribute("step", "1");
        steper.setAttribute("min", "0");
        steper.setAttribute("max", "50");
        steper.setAttribute("value", "0");
        steper.setAttribute("item", _products.typ);
        steper.setAttribute("title", _products.name);
        steper.setAttribute("price", _products.price.toFixed());
        document.getElementById(key).appendChild(steper);
    }
    //Adresse
    function fillFieldset2() {
        document.getElementById("button").addEventListener("click", checkCheckout);
        var fieldset = document.getElementById("fieldset2");
        fieldset.addEventListener("change", handleChange);
        //let h3: HTMLElement = document.createElement("h3");
        //h3.innerText = "Adresse";
        //document.getElementById("fieldset2").appendChild(h3);
        var input = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }
    function handleChange(_event) {
        var target = _event.target;
        //console.log(target);
        var articles = document.getElementsByTagName("input");
        var div = document.getElementById("div");
        var section = document.getElementById("selectedArticle");
        section.innerHTML = "";
        for (var i = 0; i < articles.length - 1; i++) {
            var article = articles[i];
            var section_1 = document.getElementById("selectedArticle");
            var p = document.createElement("p");
            var articleTyp = article.getAttribute("item");
            var articleName = article.getAttribute("title");
            var articlePrice = parseInt(article.getAttribute("price"));
            if (article.type == "radio") {
                //console.log(target.getAttribute("value"));
                //abfrage ob angew�hlt
                if (article.checked == true) {
                    article.setAttribute("value", "1");
                    if (target.name == "Baum") {
                        checkTree = 1;
                    }
                    if (target.name == "Halterung") {
                        checkHolder = 1;
                    }
                    if (target.name == "Lieferoptionen") {
                        checkShipping = 1;
                    }
                }
                else if (article.checked == false) {
                    article.setAttribute("value", "0");
                }
                var articleAmount_1 = parseInt(article.getAttribute("value"));
                console.log(articleAmount_1);
            }
            var domAmount = target.value;
            target.setAttribute("value", domAmount);
            var articleAmount = parseInt(article.getAttribute("value"));
            var price = articlePrice * articleAmount;
            p.setAttribute("price", price.toString());
            if (articleAmount > 0) {
                p.innerText += articleTyp + ": " + articleAmount + " " + articleName + " " + price + " Euro";
            }
            section_1.appendChild(p);
        }
        if (target.id == "ad") {
            var adresse = document.createElement("p");
            adresse.setAttribute("id", "adress");
            adresse.innerText = "Adresse: " + target.value;
            adress = target.value;
            div.appendChild(adresse);
        }
        calcPrice();
    }
    function calcPrice() {
        var checkout = document.getElementById("selectedArticle");
        var price = 0;
        for (var i = 0; i < checkout.childNodes.length; i++) {
            var articlePrice = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            price += articlePrice;
            var showPrice = document.createElement("div");
            document.getElementById("div").appendChild(showPrice);
            showPrice.innerText = "Gesamtpreis: " + price.toString() + " Euro";
        }
        console.log(price);
    }
    function checkCheckout(_event) {
        if (adress == "" || checkTree == 0 || checkHolder == 0 || checkShipping == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=A5Kunde.js.map