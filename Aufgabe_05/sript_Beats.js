"use strict";
var beats;
(function (beats_1) {
    //Beats Artikel
    let op = {
        img: "OP_Beats.jpg", name: "OP BEATS", description: "Slow Rap/Trap", preis: "14,99€"
    };
    let ryini = {
        img: "ryini.jpg", name: "RYINI BEATS", description: "Spanish Flamenco", preis: "21,99€"
    };
    let kazzlo = {
        img: "kazzlo.jpg", name: "KAZZLO BEATS", description: "Alternative Rock", preis: "7,99€"
    };
    let hardcore = {
        img: "hardcore.jpg", name: "DJ RADPUFFLE", description: "Aua für die Ohren", preis: "16,99€"
    };
    //Artikel in Array
    let beats = [op, ryini, kazzlo, hardcore];
    for (let index = 0; index < beats.length; index++) {
        //DIV GEN
        let newDiv = document.createElement("div");
        newDiv.id = "divNr" + index;
        document.getElementById("beats")?.appendChild(newDiv);
        //IMG IN DIV 
        let imgElement = document.createElement("img");
        imgElement.src = beats[index].img;
        document.getElementById("divNr" + index)?.appendChild(imgElement);
        //NAME
        let namePrice = document.createElement("p");
        namePrice.innerHTML = beats[index].name;
        document.getElementById("divNr" + index)?.appendChild(namePrice);
        //BESCHREIBUNG
        let desc = document.createElement("p");
        desc.innerHTML = beats[index].description;
        document.getElementById("divNr" + index)?.appendChild(desc);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("divNr" + index)?.appendChild(kaufen);
        //PREIS
        let price = document.createElement("p");
        namePrice.innerHTML = beats[index].preis;
        document.getElementById("divNr" + index)?.appendChild(price);
    }
})(beats || (beats = {}));
//# sourceMappingURL=sript_Beats.js.map