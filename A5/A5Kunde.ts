/*Aufgabe: Aufgabe 5
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 21.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace A5 {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", fillFieldset2)
    document.addEventListener("DOMContentLoaded", changeListener);
    function init(_event: Event) {
        console.log(assoProducts);
        displayAssoArray(assoProducts);
    };

    function displayAssoArray(_assoArray: assoArray): void {

        for (let key in _assoArray) {
            let value: products[] = _assoArray[key];
            if (key != "treeSpecies" && key != "holder" && key != "shipment") { for (let i: number = 0; i < value.length; i++) fillFieldset(value[i], i, key); }
        }
    }

    //Change Listener
    function changeListener(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);
    }
    
    let adress: string = "";


    function fillFieldset(_products: products, i, key): void {
        let node: HTMLElement = document.getElementById("fieldset");
        //document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string;
        //Waren
        if (i == 0) {
            childNodeHTML = "<h3>" + _products.typ + "</h3>";
            childNodeHTML += "<hr>";
            childNodeHTML += "<section id='" + key + "'>";
            childNodeHTML += "</section>";
            node.innerHTML += childNodeHTML;
        }

        let option: HTMLElement = document.createElement("p");
        option.setAttribute("value", i + _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option)
        let steper: HTMLElement = document.createElement("input");
        steper.setAttribute("type", "number");
        steper.setAttribute("name", i + " Stepper");
        steper.setAttribute("step", "1");
        steper.setAttribute("min", "0");
        steper.setAttribute("max", "50");
        steper.setAttribute("value", "0");
        steper.setAttribute("title", _products.name);
        steper.setAttribute("id", _products.price.toFixed() + " Euro");
        document.getElementById(key).appendChild(steper);


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
    function fillFieldset2(): void {
        let h3: HTMLElement = document.createElement("h3");
        h3.innerText = "Adresse";
        document.getElementById("fieldset2").appendChild(h3);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }

    function handleChange(_event: Event) {

        let articles: NodeListOf<HTMLSectionElement> = document.getElementsbyTagName("section")

        /* let target: HTMLInputElement = <HTMLInputElement>_event.target
         let name: string = target.getAttribute("title")
         if (target.title == name) {
             console.log("Changed " + target.name + " to " + target.value + " " + target.title + " " + (parseInt(target.value) * parseInt(target.id) + " Euro"));
             let div: HTMLElement = document.getElementById("div");
             div.innerHTML = "";
             let p: HTMLElement = document.createElement("p");
             p.innerText = target.value + target.title + " " + (parseInt(target.value) * parseInt(target.id)) + " Euro";
             div.appendChild(p)
         }*/
    }

    /*function checkCheckout(_event: Event): void {
        if (adress == "" || priceTree == 0 || priceHolder == 0 || priceBalls == 0 || priceLametta == 0 || priceCandle == 0 || priceShipping == 0 || numberOfBalls == 0 || numberOfLametta == 0 || numberOfCandle == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }

        else {
            document.getElementById("missing").innerHTML = "";
        }
    }*/

}