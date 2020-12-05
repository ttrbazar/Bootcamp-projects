// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

const getCountry = country => {

    const url = "https://restcountries.eu/rest/v2/name/";

    const request = new XMLHttpRequest();
    request.responseType = "json";

    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const [data] = request.response;
            renderCountry(data);
        }
    };

    request.open("GET", url + country);
    request.send();
};


const getCountryAndNeighbour = country => {

    const url = "https://restcountries.eu/rest/v2/name/";
    const alpha = "https://restcountries.eu/rest/v2/alpha/";

    const request1 = new XMLHttpRequest();
    const request2 = new XMLHttpRequest();

    let neighbour;

    request1.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);

        [neighbour] = data.borders;

        if (neighbour) {
            request2.open("GET", alpha + neighbour);
            request2.send();
        };
    });

    request2.addEventListener("load", function () {
        const data = JSON.parse(this.responseText);
        renderCountry(data, "neighbour");
    });

    request1.open("GET", url + country);
    request1.send();
};

btn.addEventListener("click", displayResults);
