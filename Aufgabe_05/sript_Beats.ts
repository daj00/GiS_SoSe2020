namespace beats { 
    //Interface Beats
    interface Beats {
        img: string;
        name: string;
        description: string;
        preis: string; 
    }
    
    //Beats Artikel
    let op: Beats = { 
        img: "OP_Beats.jpg", name: "OP BEATS", description: "Slow Rap/Trap", preis: "14,99€" 
    };
    let ryini: Beats = { 
        img: "ryini.jpg", name: "RYINI BEATS", description: "Spanish Flamenco", preis: "21,99€" 
    };
    let kazzlo: Beats = { 
        img: "kazzlo.jpg", name: "KAZZLO BEATS", description: "Alternative Rock", preis: "7,99€" 
    };
    let hardcore: Beats = { 
        img: "hardcore.jpg", name: "DJ RADPUFFLE", description: "Aua für die Ohren", preis: "16,99€" 
    };
    
    //Artikel in Array
    let beats: Beats[] = [op, ryini, kazzlo, hardcore];
    
    
    for (let index: number = 0; index < beats.length; index++) {
        //DIV GEN
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "divNr" + index;
        document.getElementById("beats")?.appendChild(newDiv);
    
        //IMG IN DIV 
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = beats[index].img;
        document.getElementById("divNr" + index)?.appendChild(imgElement);
    
        //NAME
        let namePrice: HTMLParagraphElement = document.createElement("p");
        namePrice.innerHTML = beats[index].name;
        document.getElementById("divNr" + index)?.appendChild(namePrice);
    
        //BESCHREIBUNG
        let desc: HTMLParagraphElement = document.createElement("p");
        desc.innerHTML = beats[index].description;
        document.getElementById("divNr" + index)?.appendChild(desc);
    
        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        document.getElementById("divNr" + index)?.appendChild(kaufen);
    
        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        namePrice.innerHTML = beats[index].preis;
        document.getElementById("divNr" + index)?.appendChild(price);
    
        
    }
    }