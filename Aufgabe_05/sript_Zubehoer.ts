namespace zub { 
    //Interface Zubehör
    interface Zubehoer {
        img: string;
        name: string;
        description: string;
        preis: string; 
    }
    
    //Zubehoer Artikel
    let chinch: Zubehoer = { 
        img: "chinch.jpg", name: "CHINCH KABEL", description: "2 Chinch Kabel teufel", preis: "7,50€" 
    };
    let stativ: Zubehoer = { 
        img: "Gitarrenstativ.jpg", name: "GITARREN STATIV", description: "Für 6 Gitarren", preis: "39,99€" 
    };
    let sustain: Zubehoer = { 
        img: "Sustain.jpg", name: "SUSTAIN PEDAL", description: "3 Pedale von Yamaha", preis: "42,99€" 
    };
    let drumsticks: Zubehoer = { 
        img: "drumsticks.jpg", name: "TAMA DRUMSTICKS", description: "L.U. Signa­ture Stick", preis: "11,99€" 
    };
    
    //Artikel in Array
    let zubehoer: Zubehoer[] = [chinch, stativ, sustain, drumsticks];
    
    
    for (let index: number = 0; index < zubehoer.length; index++) {
        //DIV GEN
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "divNr" + index;
        document.getElementById("beats")?.appendChild(newDiv);
    
        //IMG IN DIV 
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = zubehoer[index].img;
        document.getElementById("divNr" + index)?.appendChild(imgElement);
    
        //NAME
        let namePrice: HTMLParagraphElement = document.createElement("p");
        namePrice.innerHTML = zubehoer[index].name;
        document.getElementById("divNr" + index)?.appendChild(namePrice);
    
        //BESCHREIBUNG
        let desc: HTMLParagraphElement = document.createElement("p");
        desc.innerHTML = zubehoer[index].description;
        document.getElementById("divNr" + index)?.appendChild(desc);
    
        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("divNr" + index)?.appendChild(kaufen);
    
        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        namePrice.innerHTML = zubehoer[index].preis;
        document.getElementById("divNr" + index)?.appendChild(price);
    
        
    }
    }
