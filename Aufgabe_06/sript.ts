namespace instr { 
//Interface Instrumente
interface Instrumente {
    img: string;
    name: string;
    description: string;
    preis: string; 
}

//Instrumente Artikel
let gitarre: Instrumente = { 
    img: "Strat.jpg", name: "FENDER E-GITARRE", description: "American Ultra Telecaster", preis: "350,00€" 
};
let bass: Instrumente = { 
    img: "fender_bass.jpg", name: "FENDER E-BASS", description: "JRN Bass F3TSB", preis: "4.199,00€" 
};
let stagepiano: Instrumente = { 
    img: "Kawai.jpg", name: "KAWAI STAGEPIANO", description: "MP-7 SE", preis: "1.359,00€" 
};
let drumset: Instrumente = { 
    img: "drumset.jpg", name: "TAMA DRUMSET", description: "Impe­ri­al­star 2'' 5pcs HLB", preis: "799,00€" 
};

//Artikel in Array
let instrumente: Instrumente[] = [gitarre, bass, stagepiano, drumset];


for (let index: number = 0; index < instrumente.length; index++) {
    //DIV GEN
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "divNr" + index;
    document.getElementById("beats")?.appendChild(newDiv);

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

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = instrumente[index].preis;
    document.getElementById("divNr" + index)?.appendChild(price);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("divNr" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleClick);
}
    
// wird aufgerufen bei Klick auf Button.
let summe: number = 0;
function handleClick(): void { 
                

// Div fuer Kreis am Warenkorb
/*let zaehlerDiv: HTMLElement = document.createElement("div"); 
                zaehlerDiv.setAttribute("id", "zaehler");
                document.getElementById("kreisIcon")?.appendChild(zaehlerDiv);

// Zahl im Kreis
                let zahlIcon: HTMLElement = document.createElement("p"); 
                zahlIcon.setAttribute("id", "zahl");
                zaehlerDiv.appendChild(zahlIcon);
*/
                let zaehler: number = 0; 

                if (zaehler < 1) {
                    let zaehlerDiv: HTMLElement = document.createElement("div"); 
                    zaehlerDiv.setAttribute("id", "zaehler");
                    document.getElementById("kreisIcon")?.appendChild(zaehlerDiv); 
                    let zahlIcon: HTMLElement = document.createElement("p"); 
                    zahlIcon.setAttribute("id", "zahl");
                    zaehlerDiv.appendChild(zahlIcon);
                    
                
                }
                zaehler = zaehler + 1; 
                document.querySelector("#zahl")!.innerHTML = String(zaehler);
                
// Zahl erhoehen bei Klick im Warenkorb AB HIER: NOCH NICHT FERTIG


                
// Preis wird zusammengerechnet               
                for (let index: number = 0; index < zaehler; index++) { 
                    summe = summe + zaehler[index];
                }
// Gesamtpreis in Konsole 
                console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" })); 
        }


    }

