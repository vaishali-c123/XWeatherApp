import React, { useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";
const App = () => {
  const [result, setResult] = useState([]);
  const inputData = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const searchCity = async () => {
    const inp = inputData.current.value;
    if (inp.length === 0) {
      return;
    }
    setIsLoading(true);
    setResult([]);
    try {
      const url = "https://api.weatherapi.com/v1/current.json";

      let res = await axios(url, {
        method: "GET",
        params: {
          key: "d7c40d8857044db88b894532242901",
          q: inp,
        },
      });
      const data = await res.data;
      setResult(data);
    } catch (err) {
      alert("Failed to fetch weather data");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          name=""
          id="searchInp"
          ref={inputData}
          placeholder="Enter city name"
        />
        <button className="searchBtn" onClick={searchCity}>
          Search
        </button>
      </div>
      {isLoading ? (
        <p>Loading data...</p>
      ) : result.length != 0 ? (
        <div className="weather-cards">
          <Card name={"Temperature"} data={`${result.current.temp_c}°C`} />
          <Card name={"Humidity"} data={`${result.current.humidity}%`} />
          <Card name={"Condition"} data={`${result.current.condition.text}`} />
          <Card name={"Wind Speed"} data={`${result.current.wind_kph} kph`} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
