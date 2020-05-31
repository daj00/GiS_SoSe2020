//Interface Beats
interface Beats {
    img: string;
    name: string;
    description: string;
    preis: string; 
}

//Beats Artikel
let opbeats: Beats = { 
    img: "OP_Beats.jpg", name: "OP_BEATS", description: "Rap/Trap slow", preis: "16,99€" 
};
let ryini: Beats = { 
    img: "ryini.jpg", name: "RYINI BEATS", description: "Sad Alternative Rock", preis: "9,99€" 
};
let kazzlo: Beats = { 
    img: "kazzlo.jpg", name: "KAZZLO BEATS", description: "Psytrance The Alchemist", preis: "21,99€" 
};
let dustin: Beats = { 
    img: "hardcore.jpg", name: "DUSTIN HARDCORE", description: "Hardcore - aua für die Ohren", preis: "11,99€" 
};

//Artikel in Array
let beats: Beats[] = [opbeats, ryini, kazzlo, dustin];


for (let index: number = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "divNr" + index;
    document.getElementById("flexID")?.appendChild(newDiv);

    //IMG IN DIV 
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = instrumente[index].img;
    document.getElementById("divNr" + index)?.appendChild(imgElement);

    //NAME/PREIS
    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = instrumente[index].name;
    document.getElementById("divNr" + index)?.appendChild(namePrice);

    //BESCHREIBUNG
    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = instrumente[index].description;
    document.getElementById("divNr" + index)?.appendChild(desc);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("divNr" + index)?.appendChild(kaufen);
}