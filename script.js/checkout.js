let check = [];
localStorage.setItem('hereCheckout', JSON.stringify(check))
let checkout = JSON.parse(localStorage.getItem('hereCheckout'));
//console.log(checkout);
let tbody = document.querySelector('tbody')
console.log(checkout);

let hereCheckout = [];
localStorage.setItem('hereCheckout,', JSON.stringify(check))
let z = document.querySelector('checkout')
z.addEventListener("click", myFunction);

function myFunction(){
    let a = JSON.parse(localStorage.getItem('hereCheckout'));
    a.push(sneakers(item));
    console.log(check)
    localStorage.setItem('hereCheckout', JSON.stringify(hereCheckout));
}