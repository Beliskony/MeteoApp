import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";

export default function Indices(){
    return(
        <View style={styles.container}>

            <BlurView style={styles.flou}>

                <View style={styles.titre}>
                   <Feather name="wind" size={25} color={"#A9A9A9"} />
                   <Text style={styles.textUn}>VENT</Text>
                </View>

                <View style={styles.contenu}>

                     <Text style={styles.textdeux}>12</Text>
                     <View style={styles.miniSection}>
                        <Text style={styles.miniTexte}>km/h</Text>
                        <Text style={styles.miniTextDeux}>Vent</Text>
                     </View>

                </View>

                <View style={styles.contenu}>

                     <Text style={styles.textdeux}>12</Text>
                     <View style={styles.miniSection}>
                        <Text style={styles.miniTexte}>km/h</Text>
                        <Text style={styles.miniTextDeux}>Rafales</Text>
                     </View>

                </View>

            </BlurView>

            <BlurView style={styles.flou}> 

                <View style={styles.titre}>
                   <Feather name="sun" size={25} color={"#A9A9A9"} />
                   <Text style={styles.textUn}>INDICE UV</Text>
                 </View>

                 <View style={styles.uv}>

                     <Text style={styles.titreUv}>0 Faible</Text>
                     <View style={{marginVertical:10}}>
                        <Text style={styles.paragraphe}>Utilisez un ecran solaire entre 09:00 et 16:00</Text>
                     </View>

                </View>

            </BlurView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:290,
        width:350,
        flexDirection:"row",
        borderRadius:20,
        overflow:"hidden",
        marginVertical:10,
        justifyContent:"space-around"
    },

    flou:{
        width:160,
        flexDirection:"column",
        borderRadius:20,
        overflow:"hidden",
        padding:10,
        margin:5
    },

    titre:{
        flexDirection:"row",
        padding:5,
        borderBottomWidth:0.7,
        borderBottomColor:"#A9A9A9",
        marginBottom:5
    },

    textUn:{
        padding:3,
        fontSize:14,
        fontWeight:"600",
        color:"#A9A9A9",
        alignSelf:"center"
    },

    textdeux:{
        padding:3,
        fontSize:40,
        fontWeight:"600",
        color:"white",
    },

    contenu:{
        flexDirection:"row",
        margin:10,
        borderBottomWidth:0.7,
        borderBottomColor:"#A9A9A9",
        padding:10
    },

    miniSection:{
       justifyContent:"center"
    },

    miniTexte:{
        fontSize:15,
        color:"#A9A9A9"
    },

    miniTextDeux:{
       fontSize:15,
       color:"white",
       fontWeight:"bold"
    },

    uv:{
        flexDirection:"column",
        alignContent:"center",
        alignSelf:"center",
        margin:15
    },

    titreUv:{
        fontSize:30,
        fontWeight:"900",
        color:"white"
    },

    paragraphe:{
        fontSize:15,
        fontWeight:"600",
        color:"white"
    },
})