let kelvin = document.querySelector("#kelvin");
let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");

kelvin.oninput = function () {
    let valueKelvin = kelvin.value;
    let valueCelcius = (Number(valueKelvin) - 273.15).toFixed(2);
    let valueFahrenheit = ((Number(valueKelvin) - 273.15) * 9 / 5 + 32).toFixed(2)
    if (valueKelvin) {
        celcius.value = valueCelcius;
        fahrenheit.value = valueFahrenheit;
    } else {
        celcius.value = "";
        fahrenheit.value = "";
    }
}

celcius.oninput = function () {
    let valueCelcius = celcius.value;
    let valueKelvin = (Number(valueCelcius) + 273.15).toFixed(2);
    let valueFahrenheit = (Number(valueCelcius) * 9 / 5 + 32).toFixed(2);
    if (valueCelcius) {
        kelvin.value = valueKelvin;
        fahrenheit.value = valueFahrenheit;
    } else {
        kelvin.value = "";
        fahrenheit.value = "";
    }
}

fahrenheit.oninput = function () {
    let valueFahrenheit = fahrenheit.value;
    let valueKelvin = ((Number(valueFahrenheit) - 32) * 5 / 9 + 273.15).toFixed(2);
    let valueCelcius = ((Number(valueFahrenheit) - 32) * 5 / 9).toFixed(2);
    if (valueFahrenheit) {
        kelvin.value = valueKelvin;
        celcius.value = valueCelcius;
    } else {
        kelvin.value = "";
        celcius.value = "";
    }
}
