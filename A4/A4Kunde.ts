namespace A4 {
    document.addEventListener("DOMContentLoaded", writeHTML);
   /* interface products {
        name: string,
        price: number,
    }

    let treeSpecies: products[] = [{ name: "Tanne", price: 55 }, { name: "Kiefer", price: 60 }, { name: "Plastik Tanne", price: 30 }];
    let holder: products[] = [{ name: "Topf", price: 10 }, { name: "Tom", price: 30 }, { name: "Jason", price: 5 }];
    let christmasBall: products[] = [{ name: "rot", price: 2 }, { name: "gold", price: 6 }, { name: "glas", price: 1 }];
    let lametta: products[] = [{ name: "Gold", price: 10 }, { name: "Grün", price: 10 }, { name: "Rot", price: 10 }];
    let candleTyp: products[] = [{ name: "Wachs", price: 3 }, { name: "LED", price: 5 }];
    let shipment: products[] = [{ name: "DPD", price: 30 }, { name: "DHL", price: 30 }, { name: "UPS", price: 30 }];
*/

    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML = "";
        childNodeHTML += "<select name='Select' id='select'>";
        for (let i: number = 0; i < treeSpecies.length; i++) {

            childNodeHTML += "<option value='" + treeSpecies[i].name + "'>" + treeSpecies[i].name + "</option>";

        }
        childNodeHTML += "</select>";
        node.innerHTML += childNodeHTML;
    }
}