"use strict";
//Zubehör Artikel
let kabel = {
    img: "chinch.jpg", name: "CHINCH KABEL", description: "2 Stereokabel Teufel", preis: "7,50€"
};
let stativ = {
    img: "Gitarrenstativ.jpg", name: "GITARREN STATIV", description: "Für 6 Gitarren", preis: "39,99€"
};
let pedal = {
    img: "Sustain.jpg", name: "SUSTAIN PEDAL", description: "3 Pedale von Yamaha", preis: "42,99€"
};
let drumsticks = {
    img: "drumsticks.jpg", name: "TAMA DRUMSTICKS", description: "5A-S-BS Oak Japa­nese Skull", preis: "11,99€"
};
//Artikel in Array
let zubehoer = [kabel, stativ, pedal, drumsticks];
for (let index = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv = document.createElement("div");
    newDiv.id = "zubehoer" + index;
    document.getElementById("zubehoer")?.appendChild(newDiv);
    //IMG IN DIV 
    let imgElement = document.createElement("img");
    imgElement.src = instrumente[index].img;
    document.getElementById("zubehoer" + index)?.appendChild(imgElement);
    //NAME/PREIS
    let namePrice = document.createElement("p");
    namePrice.innerHTML = instrumente[index].name;
    document.getElementById("zubehoer" + index)?.appendChild(namePrice);
    //BESCHREIBUNG
    let desc = document.createElement("p");
    desc.innerHTML = instrumente[index].description;
    document.getElementById("zubehoer" + index)?.appendChild(desc);
    //BUTTON
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("zubehoer" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=sript_Zubehoer.js.map