const getItem = document.getElementById("getItem");
const setItem = document.getElementById("setItem");
const result = document.getElementById("result");

result.addEventListener('click', () => {
    let text = setItem.value;
    let text2 = [...text].join();
    let text3 = [...text].reverse().join()


    let palindromic = "Palindromik Kelimedir.";
    let notPalindromic = "Palindromik Değildir.";

    if (text2 == text3) {
        console.log(palindromic);
        getItem.innerHTML = palindromic;
    }
    else {
        console.log(notPalindromic);
        getItem.innerHTML = notPalindromic;
    }
})