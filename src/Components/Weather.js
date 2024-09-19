import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const [ip, setip] = useState(""); // For input (city)
  const [iw, setiw] = useState(""); // Weather (main info)
  const [it, setit] = useState(""); // Temperature
  const [id, setid] = useState(""); // Weather description
  const [valid, setvalid] = useState(true); 
  const [showWeather, setShowWeather] = useState(true); 

  const ipupdate = (evt) => {
    setip(evt.target.value);
    setvalid(true);
    setShowWeather(false);
  };

  const updatereport = () => {
    // Check if city input is empty
    if (!ip) {
      setvalid(false);
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip}&appid=2957506044647b076e930c09708b9d3f`)
      .then((response) => response.json()) 
      .then((data) => {
        if (data.cod === 200) {
          setiw(data.weather[0].main);
          setit((data.main.temp - 273.15).toFixed(2)); // Convert Kelvin to Celsius
          setid(data.weather[0].description);
          setShowWeather(true);
          setvalid(true); // Ensure valid state
        } else {
          setvalid(false); // Invalid city or error from API
          setShowWeather(false);
        }
      })
      .catch(() => {
        setvalid(false); // Handle fetch error
        setShowWeather(false);
      });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-5 shadow-lg" style={{ width: '400px' }}>
        <h1 className="card-title text-center mb-4 text-primary">Weather Report</h1>
        <p className="card-text text-center mb-4">Enter your city for weather details.</p>
        
        <input
          type="text"
          onChange={ipupdate}
          value={ip}
          className="form-control mb-4"
          placeholder="Enter your city name"
        />
        
        <button onClick={updatereport} className="btn btn-primary w-100 mb-4">
          Get Report
        </button>

        {showWeather ? (
          <div>
            <h4 className="text-primary">Weather:</h4>
            <p className="text-dark">{iw}</p>
            
            <h4 className="text-primary">Temperature:</h4>
            <p className="text-dark">{it} °C</p>
            
            <h4 className="text-primary">Description:</h4>
            <p className="text-dark">{id}</p>
          </div>
        ) : valid ? null : (
          <h5 className="text-danger text-center">Please enter a valid city name.</h5>
        )}
      </div>
    </div>
  );
};

export default Weather;
