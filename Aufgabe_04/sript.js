"use strict";
//Instrumente Artikel
let gitarre = {
    img: "strat.jpg", name: "FENDER E-GITARRE", description: "American Ultra Telecaster", preis: "350,00€"
};
let bass = {
    img: "fender_bass.jpg", name: "FENDER E-BASS", description: "New Postmodern JRN Bass F3TSB", preis: "4.199,00€"
};
let stagepiano = {
    img: "Kawai.jpg", name: "KAWAI STAGEPIANO", description: "MP-7 SE", preis: "1.359,00€"
};
let drumset = {
    img: "drumset.jpg", name: "TAMA DRUMSET", description: "Impe­ri­al­star 2'' 5pcs HLB", preis: "799,00€"
};
//Artikel in Array
let instrumente = [gitarre, bass, stagepiano, drumset];
for (let index = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv = document.createElement("div");
    newDiv.id = "instrumente" + index;
    document.getElementById("instrumente")?.appendChild(newDiv);
    //IMG IN DIV 
    let imgElement = document.createElement("img");
    imgElement.src = instrumente[index].img;
    document.getElementById("instrumente" + index)?.appendChild(imgElement);
    //NAME/PREIS
    let namePrice = document.createElement("p");
    namePrice.innerHTML = instrumente[index].name;
    document.getElementById("instrumente" + index)?.appendChild(namePrice);
    //BESCHREIBUNG
    let desc = document.createElement("p");
    desc.innerHTML = instrumente[index].description;
    document.getElementById("instrumente" + index)?.appendChild(desc);
    //BUTTON
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("instrumente" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=sript.js.map