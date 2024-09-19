import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import MapView, { UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { apiKey } from "@/constants/PageOne";

export default function PrecipitationsDeux() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const API_KEY = apiKey; 

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission refusée. Impossible d\'accéder à la localisation.');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    if (!location) {
        return <Text style={{ color: 'red', alignSelf: 'center' }}>{errorMsg || 'Mapping en cours...'}</Text>;
    }

    return (
        <BlurView intensity={50} style={styles.container}>
            <View style={styles.body}>
                <Ionicons name="umbrella" size={20} color={"#A9A9A9"} />
                <Text style={styles.texte}>PRECIPITATIONS</Text>
            </View>

            <MapView
                style={styles.map}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.1, // Zoom initial
                    longitudeDelta: 0.1,
                }}
            >
                <UrlTile
                    urlTemplate={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                    maximumZ={19}
                    tileSize={256}
                />
            </MapView>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 290,
        width: 350,
        flexDirection: "column",
        borderRadius: 20,
        overflow: "hidden",
        paddingHorizontal: 15,
    },
    body: {
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
    map: {
        height: 250,
        width: "100%",
        borderRadius: 10,
    },
});