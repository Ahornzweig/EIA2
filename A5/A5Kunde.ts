/*Aufgabe: Aufgabe 5
Name: Sarah L�nnqvist
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
            if (key == "treeSpecies" || key == "holder" || key == "shipment") { for (let i: number = 0; i < value.length; i++) fillFieldsetCheck(value[i], i, key); }
            if (key != "treeSpecies" && key != "holder" && key != "shipment") { for (let i: number = 0; i < value.length; i++) fillFieldset(value[i], i, key); }

        }
    }

    //Change Listener
    function changeListener(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        
        fieldset.addEventListener("change", handleChange);

    }

    let adress: string = "";

    function fillFieldsetCheck(_products: products, i, key): void {
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

        let radio: HTMLElement = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", _products.typ);
        radio.setAttribute("value", "0");
        radio.setAttribute("title", _products.name);
        radio.setAttribute("price", _products.price.toFixed());
        radio.setAttribute("item", _products.typ);
        radio.setAttribute("id", _products.name)
        document.getElementById(key).appendChild(radio);
        let radioLabel: HTMLElement = document.createElement("label");
        radioLabel.setAttribute("for", _products.name)
        radioLabel.innerText = _products.name + " " + _products.price.toFixed() + " Euro"
        document.getElementById(key).appendChild(radioLabel);
    }

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
        option.setAttribute("value", _products.name + " " + _products.price + " Euro");
        option.innerText = _products.name + " " + _products.price + " Euro";
        document.getElementById(key).appendChild(option)
        let steper: HTMLElement = document.createElement("input");
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
    function fillFieldset2(): void {
        //document.getElementById("button").addEventListener("click", checkCheckout);
        let h3: HTMLElement = document.createElement("h3");
        h3.innerText = "Adresse";
        document.getElementById("fieldset2").appendChild(h3);
        let input: HTMLElement = document.createElement("input");
        input.setAttribute("id", "ad");
        document.getElementById("fieldset2").appendChild(input);
    }

    function handleChange(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target)
        let articles: NodeListOf<HTMLElement> = document.getElementsByTagName("input");
        let div:HTMLElement= document.getElementById("div")
        div.innerHTML=""
        let h2: HTMLElement = document.createElement("h2")
        h2.innerText="Uebersicht"
        div.appendChild(h2)
        
            for (let i: number = 0; i < articles.length - 1; i++) {
                let article: HTMLElement = articles[i];
                let div:HTMLElement= document.getElementById("div")
                let p: HTMLElement = document.createElement("p")
                let articleTyp: string = article.getAttribute("item");
                let articleName: string = article.getAttribute("title");
                let articlePrice: number = parseInt(article.getAttribute("price"));
                let DomAmount: string = target.value
                target.setAttribute("value", DomAmount)
                let articleAmount: number = parseInt(article.getAttribute("value"))
                if (articleAmount > 0){
                p.innerText += articleTyp+ ": " +articleAmount + " " + articleName + " " + (articlePrice * articleAmount).toFixed() + " Euro";}
                
                if (target.type == "radio"){
                    //abfrage ob angew�hlt
                    if(target.checked==true){
                    target.setAttribute("value", "1")}
                    if(target.checked==false){
                    target.setAttribute("value", "0")}
                    let articleAmount: number = parseInt(article.getAttribute("value"))
                    if (articleAmount > 0){
                   p.innerText = articleTyp+ ": " +articleAmount + " " + articleName + " " + (articlePrice * articleAmount).toFixed() + " Euro";}
                }
            div.appendChild(p)
            }
                
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