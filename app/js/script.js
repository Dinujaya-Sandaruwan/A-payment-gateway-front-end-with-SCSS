// Instantiating the global app object
// var app = {};

let bank_veri = document.getElementById('bank');
let paypal_veri = document.getElementById('paypal');

function bank(){
    bank_veri.style.display = 'block';
    paypal_veri.style.display = 'none';
}

function paypal(){
    bank_veri.style.display = 'none';
    paypal_veri.style.display = 'block';
}