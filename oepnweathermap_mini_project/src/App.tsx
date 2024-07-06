import { useEffect, useState } from "react";
import "./App.css";
import { WeatherData } from "./type/types";
import axios from "axios";

const api = {
  url: process.env.REACT_APP_API_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY, // 여기에 오타가 있었음 (REACT_APP_WEATHER_APU_KEY -> REACT_APP_WEATHER_API_KEY)
};

const App = () => {
  const [cityName, setCityName] = useState("seoul");
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState("");

  const getWeather = async () => {
    const response = await axios.get(
      `${api.url}?q=${cityName}&appid=${api.api_key}`
    );

    setWeather(response.data);
    setWeatherName(response.data.weather[0].main);
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  console.log(api.url);
  console.log(process.env);
  return <div className="App"></div>;
};

export default App;
