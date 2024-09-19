import { BlurView } from "expo-blur";
import React, { useState, useEffect } from "react";
import { View,StyleSheet,Text, TouchableOpacity } from "react-native";


export default function Validation() {
    const valider = () =>{
       
    }
    return(
        <BlurView intensity={50} style={styles.container}>
            <TouchableOpacity onPress={valider}>
                <Text style={{fontSize:18}}>Rechercher</Text>
            </TouchableOpacity>
        </BlurView>
    )
}

const styles= StyleSheet.create({
    container:{
        overflow:"hidden",
        display:"flex",
        marginVertical:15,
        borderWidth:2,
        borderRadius:20,
        height:40,
        width:120,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
       
    }
})