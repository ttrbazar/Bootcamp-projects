const kelvin = prompt("Enter temperature in Kelvins:");
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.round(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
alert(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature of ${celsius} degrees Celsius is ${newton} Newton.`);
alert(`The temperature of ${celsius} degrees Celsius is ${newton} Newton.`);

let speedKMPH = prompt("Enter speed in km/h:");
let speedMPS = Math.round(speedKMPH/3.6);

console.log(`Given speed of ${speedKMPH} km/h equals ${speedMPS} m/s.`);
alert(`Given speed of ${speedKMPH} km/h equals ${speedMPS} m/s.`);

let massKG = prompt("Enter mass in kg:");
let massPound = Math.round(massKG*2.205);

console.log(`Given mass of ${massKG} kg equals ${massPound} pounds.`);
alert(`Given mass of ${massKG} kg equals ${massPound} pounds.`);