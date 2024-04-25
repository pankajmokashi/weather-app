import React, { useState } from "react";
import axios from 'axios'
import { IoSearchSharp } from "react-icons/io5";

const apiKey = "ba2d767c7354ee6337b93936ec909c9a";

function Header({handleClick}) {
    let [cityName, setCityName] = useState("");
    let [error, setError] = useState(false);

  const getWeather = async () => {
    try {
      let response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      handleClick(response.data);
      setError(false);
      setCityName("");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <header>
      <div className="logo">Weather App</div>
      <div className="input-div">
        <input type="text" placeholder="Enter City" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
        <IoSearchSharp onClick={getWeather}/>
      </div>
      {error && <div className="error">Enter correct city name!</div>}
    </header>
  );
}

export default Header;
