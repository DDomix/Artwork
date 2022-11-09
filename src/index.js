"use strict";
var _a;
;
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}
let artwork = [];
(_a = document.getElementById("gomb")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    let nev = document.getElementById("title").value;
    let ev = parseInt(document.getElementById("year").value);
    let ar = parseInt(document.getElementById("price").value);
    let magassag = parseInt(document.getElementById("height").value);
    if (nev == "") {
        window.alert("A név nem lehet üres");
    }
    else if (ev > 2022) {
        window.alert("Az év nem lehet több mint az aktuális év");
    }
    else if (ar < 1) {
        window.alert("Az ár nem lehet kisebb mint 1 forint");
    }
    else if (magassag > 10) {
        window.alert("A magasság nem lehet kisebb mint 10 cm");
    }
    else {
        artwork.push(new Statue(nev, ev, ar, magassag));
    }
    for (let eredmeny of artwork) {
        console.log(eredmeny);
    }
});
