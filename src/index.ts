interface Artwork{
    title:string;
    year:number;
    price:number;
    
    
};
class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    height:number;
    constructor(title: string,year: number,price: number, height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
    }
    
}

let artwork:Artwork[] = [];

document.getElementById("gomb")?.addEventListener("click",()=>{
    let nev = (document.getElementById("title") as HTMLInputElement).value;
    let ev= parseInt((document.getElementById("year") as HTMLInputElement).value);
    let ar=parseInt((document.getElementById("price") as HTMLInputElement).value);
    let magassag=parseInt((document.getElementById("height") as HTMLInputElement).value);
    if (nev =="") {
        window.alert("A név nem lehet üres");
    }
    else if (ev>2022){
        window.alert("Az év nem lehet több mint az aktuális év");
    }else if(ar<1){
        window.alert("Az ár nem lehet kisebb mint 1 forint");
    }else if(magassag>10){
        window.alert("A magasság nem lehet kisebb mint 10 cm");
    }else{
      artwork.push(new Statue(nev,ev,ar,magassag));  
    }

    for(let eredmeny of artwork){
        console.log(eredmeny)
    }
})

