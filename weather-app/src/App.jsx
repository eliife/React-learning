import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [city, setCity] = useState('');          
  const [weather, setWeather] = useState(null);  
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);      

  const API_KEY = "cf1b95c700934b4dd542dc2c5b5306e7" 

  
  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    const temizSehir = cityName.toLowerCase();
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`
        
      );
      
      if (!response.ok) {
        throw new Error('Şehir bulunamadı veya bir hata oluştu!');
      }
      
      const data = await response.json();
      setWeather(data); 
    } catch (err) {
      setError(err.message);
      setWeather(null); 
    } finally {
      setLoading(false);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetchWeather(city.trim());
  };


  useEffect(()=> {
    fetchWeather('Istanbul');
  }, []);
  

  return (
    <div className="app-container">
      <h1>Hava Durumu Uygulaması</h1>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Şehir adı giriniz..." 
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />
        <button type="submit">Ara</button>
      </form>

      {loading && <p className="info-msg">Veriler yükleniyor...</p>}
      
      {error && <p className="error-msg">{error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <p className="description">{weather.weather[0].description.toUpperCase()}</p>
          
          <div className="details">
            <p><strong>Nem:</strong> %{weather.main.humidity}</p>
            <p><strong>Rüzgar:</strong> {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
