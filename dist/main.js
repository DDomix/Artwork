(()=>{"use strict";var e;class t{constructor(e,t,n,l){this.title=e,this.year=t,this.price=n,this.height=l}}let n=[];null===(e=document.getElementById("gomb"))||void 0===e||e.addEventListener("click",(()=>{let e=document.getElementById("title").value,l=parseInt(document.getElementById("year").value),i=parseInt(document.getElementById("price").value),s=parseInt(document.getElementById("height").value);""==e?window.alert("A név nem lehet üres"):l>2022?window.alert("Az év nem lehet több mint az aktuális év"):i<1?window.alert("Az ár nem lehet kisebb mint 1 forint"):s>10?window.alert("A magasság nem lehet kisebb mint 10 cm"):n.push(new t(e,l,i,s));for(let e of n)console.log(e)}))})();