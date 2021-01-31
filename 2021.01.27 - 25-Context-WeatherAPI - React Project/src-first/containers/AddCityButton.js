import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

// WEATHER API Info
const apiKey = '2082573baa2c88e4ee84edd0044c8192';
const forecastUrl = 'http://api.weatherstack.com/current?access_key=';

const AddCityButton = () => {

    const { addCity } = useContext(WeatherContext);

    const [city, setCity] = useState("");

    const handleInputOnChange = e => {
        setCity(e.target.value);
    }

    const fetchTemperature = async city => {
        const urlToFetch = forecastUrl + apiKey + "&query=" + city;
        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                // console.log(jsonResponse);
                if (jsonResponse.error) {
                    // console.log("In TRY: ", jsonResponse);
                    throw new Error(jsonResponse.error.info)
                } else {
                    return jsonResponse.current.temperature;
                }
            } else {
                throw new Error("Request Failed!");
            }
        } catch (err) {
            // console.log("In CATCH: ", err.message);
            return err;
        }
    }

    const submitCity = async e => {
        e.preventDefault();
        if (city.trim() !== "") {
            const temperature = await fetchTemperature(city.trim());
            // console.log("In AFTER FETCH: ", temperature);
            if (temperature instanceof Error) {
                alert(temperature.message);
            } else {
                addCity(city.trim(), temperature);
            }
        }
        setCity("");
    }

    return (
        <div className="add-city-form">
            <form onSubmit={submitCity}>
                <input className="input" onChange={handleInputOnChange} value={city} required />
                <button className="input">Add</button>
            </form>
        </div>
    );
};

export default AddCityButton;
