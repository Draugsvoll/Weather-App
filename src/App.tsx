import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card.tsx';
import type { weatherProp } from './types';

function App() {
  const [weatherData, setWeatherData] = useState<weatherProp>();
  const URL: string =
    'https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current_weather=true&hourly=temperature_2m,is_day,weathercode&forecast_days=1';

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setWeatherData({
        temperature: data.current_weather.temperature,
        weathercode: data.current_weather.weathercode,
        is_day: data.current_weather.is_day,
      });
    } catch (e) {
      console.error('Error fetching data: ', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Værvarsel Bergen brygge</h3>
      {weatherData ? <Card {...weatherData} /> : <p>loading..</p>}
    </>
  );
}
export default App;
