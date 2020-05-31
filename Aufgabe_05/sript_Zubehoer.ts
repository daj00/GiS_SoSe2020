//Interface Zubehör
interface Zubehoer {
    img: string;
    name: string;
    description: string;
    preis: string; 
}

//Zubehör Artikel
let kabel: Zubehoer = { 
    img: "chinch.jpg", name: "CHINCH KABEL", description: "2 Stereokabel Teufel", preis: "7,50€"
};
let stativ: Zubehoer = { 
    img: "Gitarrenstativ.jpg", name: "GITARREN STATIV", description: "Für 6 Gitarren", preis: "39,99€" 
};
let pedal: Zubehoer = { 
    img: "Sustain.jpg", name: "SUSTAIN PEDAL", description: "3 Pedale von Yamaha", preis: "42,99€" 
};
let drumsticks: Zubehoer = { 
    img: "drumsticks.jpg", name: "TAMA DRUMSTICKS", description: "5A-S-BS Oak Japa­nese Skull", preis: "11,99€" 
};

//Artikel in Array
let zubehoer: Zubehoer[] = [kabel, stativ, pedal, drumsticks];


for (let index: number = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "zubehoer" + index;
    document.getElementById("zubehoer")?.appendChild(newDiv);

    //IMG IN DIV 
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = instrumente[index].img;
    document.getElementById("zubehoer" + index)?.appendChild(imgElement);

    //NAME/PREIS
    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = instrumente[index].name;
    document.getElementById("zubehoer" + index)?.appendChild(namePrice);

    //BESCHREIBUNG
    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = instrumente[index].description;
    document.getElementById("zubehoer" + index)?.appendChild(desc);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("zubehoer" + index)?.appendChild(kaufen);
}
