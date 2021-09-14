import React from "react";
import './WeatherCard.css';


const WeatherCard = ({ location }) => {
    return (
            <div className="weatherCards">
                
                <ul className="weatherList">
          <li className="location">Location: {location.name}</li>
          <li className="temperature">
            Current Temperature: <strong><span>
            {location.main.temp} °C </span></strong> 
          </li>
          <li className="country">
            Country: <span>
            {location.sys.country}</span>
          </li>
          <li className="description">Description: {location.weather[0].description}</li>
          </ul>

        </div>

  );
};

export default WeatherCard;
