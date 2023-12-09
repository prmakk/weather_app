import React, {useState} from "react";

export default function App() {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState("");

    function getWeather() {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96933ff17bc7a2f318788d22dea4aec3`
        )
            .then((response) => response.json())
            .then((data) => {
                setWeather(data)
            })
        setCity('')
    }

    return (
        <div className="App">
            <header>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={getWeather} className="getWeatherBtn">Get weather</button>
            </header>
            
            <section>
                <div className="mainInfo">
                    <p className="mainInfo__error">{weather.cod == 404 ? "Place not found" : null}</p>
                    <p className="mainInfo__city">{weather.name}</p>
                    <p className="mainInfo__degrees">{weather.main ? Math.round(weather.main.temp - 273) + '°': null}</p>
                    <p className="mainInfo__weather">{weather.weather ? weather.weather[0].main : null}</p>
                </div>

                <div className="secondaryInfo">
                    <p className="secondaryInfo__wind">{weather.wind ? 'Wind: ' + Math.round(weather.wind.speed) + ' km/h' : null}</p>
                    <p className="secondaryInfo__humidity">{weather.main ? 'Humidity: ' + weather.main.humidity + " %": null}</p>
                </div>
            </section>
        </div>
    );
}
