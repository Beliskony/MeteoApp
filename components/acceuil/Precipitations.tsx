import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function Precipitations(){
    return(
        <BlurView intensity={50} style={styles.container}>

            <View style={styles.body}>
               <Ionicons name="umbrella" size={20} color={"#A9A9A9"} />
               <Text style={styles.texte}>PRECIPITATIONS</Text>
            </View>

            <View>
                 {/*Ajout de la Map par Api*/}
            </View>

        </BlurView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:290,
        width:350,
        flexDirection:"column",
        borderRadius:20,
        overflow:"hidden",
        paddingHorizontal:15
    },

    body:{
        flexDirection:"row",
        padding:5,
        borderBottomWidth:0.7,
        borderBottomColor:"#A9A9A9",
        marginBottom:5
    },

    texte:{
        padding:3,
        fontSize:12,
        fontWeight:"600",
        color:"#A9A9A9",
        alignSelf:"center"
    },
})