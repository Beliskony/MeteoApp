import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Alert, ActivityIndicator, Image } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { apiKey } from "@/constants/PageOne";
import axios from "axios";
import * as Location from 'expo-location'; // Importer expo-location

interface Props {
  city: string; // Définir la prop `city`
}

const getDayOfWeek = (date: Date) => {
    const days = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'];
    const today = new Date();
    const dayIndex = date.getDay();
  
    // Vérifier si la date correspond à aujourd'hui
    if (today.toDateString() === date.toDateString()) {
      return "Auj.";
    }
    return days[dayIndex];
  };

export default function PrevisionDeux({city}:Props) {
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  

  const API_KEY = apiKey;  

  useEffect(() => {
    const getForecast = async (city: string) => {
      setError(null);
      setLoading(true); // Réinitialiser le chargement avant l'appel à l'API
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        setForecast(response.data);
      } catch (error) {
        setError('Erreur lors de la récupération des informations');
      } finally {
        setLoading(false); // Arrêter le chargement après la récupération des données
      }
    };
    if (city) {
      getForecast(city); // Utiliser `city` pour la requête météo
    }
  }, [city]);

  // Filtrer pour obtenir des prévisions à 9h et 18h (19h format 24h)
  const filteredForecast = forecast?.list.filter((item: any) => item.dt_txt.includes("09:00:00") || item.dt_txt.includes("18:00:00"));
  
  if (loading) {
    return <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />;
  }

  if (error) {
    return <Text style={{ color: 'red', alignSelf: 'center' }}>{error}</Text>;
  }

  return (
    <BlurView intensity={70} style={styles.container}>
      <View style={styles.ligneOne}>
        <Ionicons name="calendar-outline" size={20} color={"#A9A9A9"} />
        <Text style={styles.texte}>PREVISIONS</Text>
      </View>

      <ScrollView>
        {filteredForecast && filteredForecast.map((item: any, index: number) => (
          <View key={index} style={styles.lignedeux}>
            <Text style={styles.texteDe}>{getDayOfWeek(new Date(item.dt_txt))}</Text>

            <Text style={styles.texteDeIc}>{Math.round(item.main.temp_min)}°</Text>

            <View style={styles.listeIcone}>
            <Image 
              source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} 
              style={{ width: 50, height: 50 }} 
            />
            </View>
        
            <Text style={styles.texteDe}>{Math.round(item.main.temp_max)}°</Text>
          </View>
        ))}
      </ScrollView>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 450,
    width: 350,
    flexDirection: "column",
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 15,
  },
  ligneOne: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: "#A9A9A9",
    marginBottom: 5,
  },
  texte: {
    padding: 3,
    fontSize: 12,
    fontWeight: "600",
    color: "#A9A9A9",
    alignSelf: "center",
  },
  lignedeux: {
    flexDirection: "row",
    height: 35,
    justifyContent: "space-between",
    borderBottomWidth: 0.7,
    borderBottomColor: "#A9A9A9",
    marginBottom: 5,
  },
  texteDe: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
    paddingHorizontal:5,
    alignSelf:"center",
    justifyContent:"center",

  },
  texteDeIc: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
    alignSelf:"center",
    justifyContent:"space-around"
  },
  listeIcone:{
    justifyContent:'center',
    alignSelf:"center",
    alignItems:"center"
  }
});