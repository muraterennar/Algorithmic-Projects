const getNumber = document.getElementById("setNumber");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const number = 0;

finding = () => {
    const number = getNumber.value;
    let perfectNumber = "Mükemmel Sayı";
    let notPerfectNumber = "Mükemmel Sayı Değil";
    let error = "Lütfen bir sayı giriniz";


    let toplam = 0;
    for (i = 1; i < number; i++) {
        if (number % i == 0) {
            toplam = toplam + i;
        }
    }

    if (toplam == number && number) {
        console.log(perfectNumber);
        result.innerHTML = perfectNumber;
    }
    else if (number) {
        console.log(notPerfectNumber);
        result.innerHTML = notPerfectNumber;
    }
    else {
        console.log(error);
        result.innerHTML = error;
    }
}

btn.addEventListener("click", finding);