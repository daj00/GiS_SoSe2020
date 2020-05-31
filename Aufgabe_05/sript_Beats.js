"use strict";
//Beats Artikel
let opbeats = {
    img: "OP_Beats.jpg", name: "OP_BEATS", description: "Rap/Trap slow", preis: "16,99€"
};
let ryini = {
    img: "ryini.jpg", name: "RYINI BEATS", description: "Sad Alternative Rock", preis: "9,99€"
};
let kazzlo = {
    img: "kazzlo.jpg", name: "KAZZLO BEATS", description: "Psytrance The Alchemist", preis: "21,99€"
};
let dustin = {
    img: "hardcore.jpg", name: "DUSTIN HARDCORE", description: "Hardcore - aua für die Ohren", preis: "11,99€"
};
//Artikel in Array
let beats = [opbeats, ryini, kazzlo, dustin];
for (let index = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv = document.createElement("div");
    newDiv.id = "divNr" + index;
    document.getElementById("flexID")?.appendChild(newDiv);
    //IMG IN DIV 
    let imgElement = document.createElement("img");
    imgElement.src = instrumente[index].img;
    document.getElementById("divNr" + index)?.appendChild(imgElement);
    //NAME/PREIS
    let namePrice = document.createElement("p");
    namePrice.innerHTML = instrumente[index].name;
    document.getElementById("divNr" + index)?.appendChild(namePrice);
    //BESCHREIBUNG
    let desc = document.createElement("p");
    desc.innerHTML = instrumente[index].description;
    document.getElementById("divNr" + index)?.appendChild(desc);
    //BUTTON
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("divNr" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=sript_Beats.js.map