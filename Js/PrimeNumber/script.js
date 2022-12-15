const setNumber = document.getElementById("setNumber");
const getNumber = document.getElementById("getNumber");
const btn = document.getElementById("btn");

let primeNumber = "Asal Sayı";
let notPrimeNumber = "Asal Sayı Değil";



let result = () => {
    let prime = 0;

    let number = setNumber.value;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            prime += i;
        }
    }

    if (prime == 1) {
        getNumber.innerHTML = "Asal sayı";
    }
    else {
        getNumber.innerHTML = "Asal sayı değil";
    }





}

btn.addEventListener('click', result);

