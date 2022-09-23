const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const key = "249e07e5fc6314d0a4faaf46";

const rateCl = document.getElementById("rate");
const swap = document.getElementById("swap");


function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const swapRate = data.conversion_rates[currency_two];
            rateCl.innerHTML = `${currency_one} = ${swapRate} ${currency_two}`;
            amountTwo.value = (amountOne.value * swapRate).toFixed(2);
        })

}

function swapCurrency() {
    const temp = currencyTwo.value;
    currencyTwo.value = currencyOne.value;
    currencyOne.value = temp;
    calculate();
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', swapCurrency);
calculate();