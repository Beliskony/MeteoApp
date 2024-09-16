import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "@/constants/PageOne";

// Fonction pour récupérer la météo actuelle
export const WeatherApp = () => {
  const [city, setCity] = useState<string>('Abidjan'); // Ville par défaut
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = apiKey; // Clé API

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError(null); // Réinitialiser l'erreur avant une nouvelle requête
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      setWeather(response.data);
    } catch (err) {
      setError('Échec de la récupération des données météo');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city); // Récupérer la météo au montage du composant
  }, [city]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value); // Mettre à jour la ville lorsque l'utilisateur tape
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city); // Récupérer les données météo lorsque le bouton de recherche est cliqué
    } else {
      setError('Veuillez entrer un nom de ville valide');
    }
  };
};
