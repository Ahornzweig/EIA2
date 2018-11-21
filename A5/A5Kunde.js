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
            for (var i = 0; i < value.length; i++)
                fillFieldset(value[i], i);
        }
    }
    //Change Listener
    function changeListener(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    //let price: number[]=[];
    /*let priceTree: number = 0;
    let priceHolder: number = 0;
    let priceBalls: number = 0;
    let priceLametta: number = 0;
    let priceCandle: number = 0;
    let priceShipping: number = 0;

    let numberOfBalls: number = 0;
    let numberOfLametta: number = 0;
    let numberOfCandle: number = 0;*/
    var adress = "";
    function fillFieldset(_products, i) {
        var node = document.getElementById("fieldset");
        //document.getElementById("button").addEventListener("click", checkCheckout);
        var childNodeHTML;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<article name='Select' id='" + _products.typ + "'>";
            childNodeHTML += "<p value='" + i + _products.name + " " + _products.price + " Euro'>" + _products.name + " " + _products.price + " Euro</p";
            childNodeHTML += "<input type='number' name='Stepper' step='1' min='0' max='50' value='0'/>";
            childNodeHTML += "</article>";
            node.innerHTML += childNodeHTML;
        }
        else {
            var option = document.createElement("p");
            option.setAttribute("value", i + _products.name + " " + _products.price + " Euro");
            option.innerText = _products.name + " " + _products.price + " Euro";
            document.getElementById(_products.typ).appendChild(option);
            var steper = document.createElement("input");
            steper.setAttribute("type", "number");
            steper.setAttribute("name", "Stepper");
            steper.setAttribute("step", "1");
            steper.setAttribute("min", "0");
            steper.setAttribute("max", "50");
            steper.setAttribute("value", "0");
            steper.setAttribute("title", _products.name);
            steper.setAttribute("id", _products.price.toFixed() + " Euro");
            document.getElementById(_products.typ).appendChild(steper);
        }
        /*
                //Halterung
                childNodeHTML += "<h3>Halterung</h3>";
                for (let i: number = 0; i < holder.length; i++) {
                    childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + holder[i].name + " " + holder[i].price + " Euro'  id='radio" + i + "' />";
                    childNodeHTML += "<label for='check" + i + "'>" + holder[i].name + " " + holder[i].price + " Euro</label>";
                }
                childNodeHTML += "<hr>";
        */
    }
    //Adresse
    function fillFieldset2() {
        var h3 = document.createElement("h3");
        h3.innerText = "Adresse";
        document.getElementById("fieldset2").appendChild(h3);
        var input = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }
    function handleChange(_event) {
        var target = _event.target;
        if (target.name == "Stepper") {
            console.log("Changed " + target.name + " to " + target.value + " " + target.title + " " + (parseInt(target.value) * parseInt(target.id) + " Euro"));
            var div = document.getElementById("div");
            /*let childNodeHTML: string;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<p>"+target.title +" "+(parseInt(target.value) * parseInt(target.id))+" Euro</p>";
            div.innerHTML=childNodeHTML*/
            var p = document.createElement("p");
            p.innerText = target.title + " " + (parseInt(target.value) * parseInt(target.id)) + " Euro";
            div.appendChild(p);
        }
        /*
          //Adresse
          if (target.id == "ad") {
              let node: HTMLElement = document.getElementById("adress");
              adress=target.value;
              let childNodeHTML: string;
  
              childNodeHTML = "";
              childNodeHTML += "<a>";
              childNodeHTML += " " + target.value;
              childNodeHTML += "</a>";
  
              node.innerHTML = childNodeHTML;
          }
          let node: HTMLElement = document.getElementById("price");
          let childNodeHTML: string;
  
          childNodeHTML = "";
          childNodeHTML += "<a>";
          childNodeHTML += (priceTree + priceHolder + (priceBalls * numberOfBalls) + (priceLametta * numberOfLametta) + (priceCandle * numberOfCandle) + priceShipping);
          childNodeHTML += " Euro";
          childNodeHTML += "</a>";
          node.innerHTML = childNodeHTML;*/
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=A5Kunde.js.map