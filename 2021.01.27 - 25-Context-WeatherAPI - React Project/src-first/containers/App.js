import React, { useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import AddCityButton from "./AddCityButton";
import CityList from "./CityList";
import TemperatureAverage from "./TemperatureAverage";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [cities, setCities] = useState([]);

    const addCity = (name, temperature) => {
        // console.log(temperature);
        setCities([...cities, { name, temperature, id: uuidv4() }]);
    }

    const deleteCity = id => {
        setCities(cities.filter(city => city.id !== id));
    }

    // console.log(cities);

    return (
        <WeatherContext.Provider value={{ cities, addCity, deleteCity }}>
            <div className="city-overview">
                <h2>Multi-Weather App</h2>
                <AddCityButton />
                <CityList />
                <TemperatureAverage />
            </div>
        </WeatherContext.Provider>
    );
}


export default App;
