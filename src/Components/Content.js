import React from "react";
import Card from "./Card";

function Content({ data }) {
  const getDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  function getDirection(angle) {
    let directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    let section = parseInt(angle.deg / 22.5 + 0.5);
    section = section % 16;
    return directions[section] + " " + angle.speed;
  }

  return (
    <section className="content">
      <div className="city">
        <div>
          {data.name}, {data.sys.country}
        </div>
        <div>{getDate()}</div>
      </div>
      <div className="temp">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="icon-div">
            <img src="/icon.png" alt="icon" />
          </div>
          <div className="temp-value">
            <span>{(data.main.temp - 273).toFixed(2)}°</span>C
          </div>
        </div>

        <div className="weather">
          <div className="desc">{data.weather[0].description}</div>
          <div className="temp-var">
            Real Feel: {(data.main.feels_like - 273).toFixed(2)}°c
          </div>
        </div>
      </div>
      <div className="data">
        <Card title="Humidity" value={data.main.humidity} unit="%" />
        <Card title="Wind" value={getDirection(data.wind)} unit="m/s" />
        <Card title="Pressure" value={data.main.pressure} unit="hPa" />
        <Card title="Visibility" value={data.visibility / 1000} unit="km" />
      </div>
    </section>
  );
}

export default Content;
