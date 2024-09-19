import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { apiKey } from '@/constants/PageOne';

interface Props {
  city: string; // Définir la prop `city`
}

export default function LigneOneDeuxDeux({city}: Props) {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = apiKey;

  useEffect(() => {
    const fetchWeather = async (city: string) => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=fr&units=metric`;
        const response = await axios.get(URL);
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather(city); // Utiliser `city` pour la requête météo
    }
  }, [city]);

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />;
  }

  if (error) {
    return <Text style={{ color: 'red', alignSelf: 'center' }}>{error}</Text>;
  }
  return (
    <BlurView intensity={70} style={styles.barre}>
      <Text style={styles.titre}>{}</Text>
      <Text style={styles.ville}>{weather.name}</Text>

      <View style={{ justifyContent: "center", alignContent: "center", flexDirection: "row" }}>
        <Text style={styles.degre}>{Math.round(weather.main.temp)}</Text>
        <Text style={styles.degre}>°</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Text style={{ color: "white", fontWeight: "bold", marginVertical: 3 }}>{weather.weather[0].description}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", paddingRight: 10 }}>
            <Ionicons name='arrow-down' style={{ paddingVertical: 2, color: "white" }} />
            <Text style={{ color: "white" }}>{Math.round(weather.main.temp_min)}°</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name='arrow-up' style={{ paddingVertical: 2, color: "white" }} />
            <Text style={{ color: "white" }}>{Math.round(weather.main.temp_max)}°</Text>
          </View>

        </View>
      </View>
    </BlurView>

  );
}

const styles = StyleSheet.create({
  barre: {
    marginVertical: 10,
    height: 200,
    width: 300,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  titre: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    alignSelf: "center"
  },
  ville: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: "white"
  },
  degre: {
    fontWeight: "100",
    fontSize: 60,
    color: "white"
  }

});
