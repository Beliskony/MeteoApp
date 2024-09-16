import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";
import { apiKey } from "@/constants/PageOne";
import * as Location from 'expo-location'; // Importer expo-location

export default function Corpus(){
   const [forecast, setForecast] = useState<any[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
   const [location, setLocation] = useState<Location.LocationObject | null>(null);

   const API_KEY = apiKey;

   useEffect(() => {
     const fetchForecast = async (latitude: number, longitude: number) => {
       try {
         const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=fr&units=metric`;
         const response = await axios.get(URL);
         setForecast(response.data.list.slice(0, 12)); // Récupérer les 12 premières prévisions (3 heures par intervalle)
       } catch (err) {
         setError('Failed to fetch forecast data');
       } finally {
         setLoading(false);
       }
     };

     const getLocation = async () => {
       let { status } = await Location.requestForegroundPermissionsAsync();
       if (status !== 'granted') {
         Alert.alert('Permission refusée', 'Impossible d\'accéder à la localisation');
         setError('Location permission not granted');
         setLoading(false);
         return;
       }

       let currentLocation = await Location.getCurrentPositionAsync({});
       setLocation(currentLocation);

       const { latitude, longitude } = currentLocation.coords;
       fetchForecast(latitude, longitude);
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
     <BlurView intensity={70} style={styles.container}>
       <View style={styles.first}>
         <Text style={styles.petitMot}>Prévisions météo en temps réel</Text>
       </View>
       
       <ScrollView horizontal>
         {forecast.map((item, index) => (
           <View key={index} style={styles.slideMeteo}>
             <Text style={styles.petit}>
               {new Date(item.dt * 1000).getHours()} h
             </Text>
             <Ionicons
               name={getWeatherIcon(item.weather[0].main)} // Fonction pour afficher l'icône correspondante
               color={"white"}
               size={30}
               style={{ paddingVertical: 5, alignSelf: "center", alignContent: "center" }}
             />
             <Text style={styles.petit}>{Math.round(item.main.temp)}°C</Text>
           </View>
         ))}
       </ScrollView>
     </BlurView>
   );
}

// Fonction pour mapper les conditions météo avec les icônes Ionicons
const getWeatherIcon = (weather: string) => {
  switch (weather.toLowerCase()) {
    case "clear":
      return "sunny-outline";
    case "clouds":
      return "cloud-outline";
    case "rain":
      return "rainy-outline";
    case "thunderstorm":
      return "thunderstorm-outline";
    case "snow":
      return "snow-outline";
    case "mist":
      return "cloud-outline";
    default:
      return "cloudy-outline";
  }
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 350,
    borderRadius: 20,
    overflow: "hidden",
  },
  first: {
    margin: 10,
    padding: 5,
    borderBottomWidth: 0.8,
    borderColor: "white",
  },
  petitMot: {
    color: "white",
    fontWeight: "400",
    fontSize: 12,
    alignSelf: "center",
  },
  slideMeteo: {
    flexDirection: "column",
    alignContent: "center",
    marginHorizontal: 10,
    padding: 10,
    overflow: "hidden",
  },
  petit: {
    color: "white",
    fontWeight: "400",
    fontSize: 16,
    alignSelf: "center",
    alignContent: "center",
  },
});