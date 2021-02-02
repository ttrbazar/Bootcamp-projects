const request = require("request");
require("dotenv").config();

// WEATHER API Info
const apiKey = process.env.API_KEY;
const forecastUrl = 'http://api.weatherstack.com/current?access_key=';
const city = "paris";
const url = forecastUrl + apiKey + "&query=" + city;


request(url, (err, response, body) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        const info = JSON.parse(body);
        // console.log("Body: ", JSON.parse(body));
        console.log(`Today ${info.current.temperature} degrees in ${info.location.name}`);
    }
})