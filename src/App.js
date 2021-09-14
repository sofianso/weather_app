import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {

  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  

  useEffect(() => {
    // Melbourne, Sydney and Perth
    const locationsID = [2158177,2147714,2063523];	
    const API_KEY = "81ced8e2bfa0a829dead4508e7ab769b"
    fetch(
      `https://api.openweathermap.org/data/2.5/group?id=${locationsID}&mode=json&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.list);
        setIsLoading(false);
        console.log(data.list);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
          <div>
            {locations.map((location) => (
              <WeatherCard key={location.id} location={location} />
            ))}
          </div>
        )}
    </div>
  );
}

export default App;
