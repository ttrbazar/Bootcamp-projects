import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";


const CityList = () => {

    const { cities, deleteCity } = useContext(WeatherContext);

    return (
        <table className="city-list">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {cities.map(city =>
                    <tr key={city.id}>
                        <td>{city.name}</td>
                        <td>{city.temperature}</td>
                        <td><button onClick={e => deleteCity(city.id)} className="input">X</button></td>
                    </tr>)}
            </tbody>
        </table>
    );
};

export default CityList;
