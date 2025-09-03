const convertButton = document.querySelector(".convert-button")
const currencyStart = document.querySelector(".currency-start")
const currencySelect = document.querySelector(".currency-select")

function convertValues2() { }

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const rates = {
        real: 1,
        dolar: 5.4,
        euro: 6.3,
        libra: 7.3,
        bitcoin: 609.6,
    }

    const from = currencyStart.value;
    const to = currencySelect.value;

    if (from === to) {
        alert("ERROR");
        return;
    }

    const valueInReal = inputCurrencyValue * rates[from];
    const convertedValue = valueInReal / rates[to];
    const formatters = {
        real: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }),
        dolar: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }),
        euro: new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }),
        libra: new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }),
        bitcoin: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 2,
        }),
    };

    currencyValueToConvert.innerHTML =
        formatters[from].format(inputCurrencyValue);
    currencyValueConverted.innerHTML = formatters[to].format(convertedValue);
}

function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-start");
    const currencyImage1 = document.getElementById("currency-img");

    if (currencyStart.value == "dolar") {
        currencyName1.innerHTML = "Dólar americano";
        currencyImage1.src = "./assets/dolar.png";
    }

    if (currencyStart.value == "euro") {
        currencyName1.innerHTML = "Euro";
        currencyImage1.src = "./assets/euro.png";
    }

    if (currencyStart.value == "libra") {
        currencyName1.innerHTML = "Libra";
        currencyImage1.src = "./assets/libra.png";
    }

    if (currencyStart.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin";
        currencyImage1.src = "./assets/bitcoin.png";
    }

    if (currencyStart.value == "real") {
        currencyName1.innerHTML = "Real";
        currencyImage1.src = "./assets/real.png";
    }

    convertValues();
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencyStart.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)