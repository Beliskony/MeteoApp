import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'// Importer expo-location
import axios from 'axios';
import { apiKey } from '@/constants/PageOne';

export default function LigneOne() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const API_KEY = apiKey;

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=fr&units=metric`;
        const response = await axios.get(URL);
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    const getLocation = async () => {
      // Demander la permission de localisation
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission refusée', 'Impossible d\'accéder à la localisation');
        setError('Location permission not granted');
        setLoading(false);
        return;
      }

      // Récupérer la localisation actuelle
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      const { latitude, longitude } = currentLocation.coords;
      fetchWeather(latitude, longitude);
    };

    getLocation();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />;
  }

  if (error) {
    return <Text style={{ color: 'red', alignSelf: 'center' }}>{error}</Text>;
  }

  return (
    <BlurView intensity={70} style={styles.barre}>
      <Text style={styles.titre}>Ma Position</Text>
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
