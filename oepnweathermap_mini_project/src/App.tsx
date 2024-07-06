import { useEffect, useState } from "react";
import "./App.css";
import { WeatherData } from "./type/types";
import axios from "axios";
import styled from "styled-components";
import InsertCityName from "./components/InsertCityName";
import PrintWeather from "./components/PrintWeather";
import Clouds from "./assets/cloud.jpg";
import Clear from "./assets/clear.jpg";
import Rain from "./assets/rain.jpg";
import Drizzle from "./assets/drizzle.jpg";
import Snow from "./assets/snow.jpg";
import Thunderstorm from "./assets/thunderstorm.jpg";

const weatherImg: { [key: string]: string } = {
  Clouds: Clouds,
  Clear: Clear,
  Rain: Rain,
  Drizzle: Drizzle,
  Snow: Snow,
  Thunderstorm: Thunderstorm,
};

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

  console.log(weather);

  useEffect(() => {
    getWeather();
  }, [cityName]);

  // console.log(api.url);
  // console.log(process.env);
  return (
    <Container img={weatherImg[weatherName]}>
      <Box>
        <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
        <PrintWeather weather={weather} />
        <InsertCityName setCityname={setCityName} />
      </Box>
    </Container>
  );
};

export default App;

interface ContainerProps {
  img: string | undefined;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  backgrond-position: center;
  transition: all 0.2s ease-in;
`;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
