namespace A4{
    
export interface products{
    name:string,
    price: number,
}
    
    export let treeSpecies:products[]=[{name:"Tanne",price:55},{name:"Kiefer",price:60},{name:"Plastik Tanne",price:30}];
    export let holder:products[]=[{name:"Topf",price:10},{name:"Halterung",price:30},{name:"Keine",price:0}];
    export let christmasBall:products[]=[{name:"rot",price:2},{name:"gold",price:6},{name:"glas",price:1}];
    export let lametta:products[]=[{name:"Gold",price:10},{name:"Gruen",price:10},{name:"Rot",price:10}];
    export let candleTyp:products[]=[{name:"Wachs",price:3},{name:"LED",price:5}];
    export let shipment:products[]=[{name:"DPD",price:20},{name:"DHL",price:25},{name:"UPS",price:30}];

}