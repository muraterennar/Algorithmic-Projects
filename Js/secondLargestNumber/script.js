const add_btn = document.getElementById("add-btn");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

const top_number_text = document.getElementById("top-number-text");
const second_number_text = document.getElementById("second-number-text");




let nums = [];

add_btn.addEventListener('click', () => {
    nums.push(input.value)
    result.innerHTML = nums;
});

btn.addEventListener('click', () => {
    var enbuyuk;
    var ikinci;
    enbuyuk = nums[0];
    ikinci = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > enbuyuk) {
            ikinci = enbuyuk;
            enbuyuk = nums[i];
        } else if (nums[i] > ikinci && nums[i] < enbuyuk) {
            ikinci = nums[i];
        }

    }

    top_number_text.innerHTML = enbuyuk;
    second_number_text.innerHTML = ikinci;
});
