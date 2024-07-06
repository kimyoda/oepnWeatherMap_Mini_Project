export type WeatherData = {
  weather: {
    id: number;
    main: Main | undefined;
    description: string;
    icon: string;
  }[];

  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
};

export type ExtendedForceastData = {
  day: string;
  temp: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  };
};

export type Main = "Clear" | "Rain" | "undefined";
