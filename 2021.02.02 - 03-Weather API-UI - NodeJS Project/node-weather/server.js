const express = require('express');
const request = require("request");
const bodyParser = require("body-parser");
const app = express();


require("dotenv").config();

// WEATHER API Info
const apiKey = process.env.API_KEY;
const forecastUrl = 'http://api.weatherstack.com/current?access_key=';


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => { res.render('index') })

app.post("/", (req, res) => {
    // console.log(req);
    console.log(req.body.city);
    const url = forecastUrl + apiKey + "&query=" + req.body.city;
    request(url, (err, response, body) => {
        console.log("in request");
        if (err) {
            console.log("Error: ", err);
            res.render("index", { weather: null, error: "Error, please try again" });
        } else {
            const weather = JSON.parse(body);
            let message = `It's ${weather.current.temperature} degrees in ${weather.location.name}`;
            console.log(message);
            res.render("index", { weather: message, error: null });
        }
    });
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
