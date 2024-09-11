import React from "react";
import { View,ScrollView,Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";


export default function Prevision(){
    return(
        <BlurView intensity={70} style={styles.container}>

             <View style={styles.ligneOne}>
                <Ionicons name="calendar-outline" size={20} color={"#A9A9A9"} />
                <Text style={styles.texte}>PREVISION SUR 10 JOURS</Text>
             </View>

             <ScrollView>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Auj.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Lun.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Mar.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Mer.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Jeu.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Ven.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Sam.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Dim.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Lun.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>

               <View style={styles.lignedeux}>
                <Text style={styles.texteDe}>Mar.</Text>
                <Ionicons name="moon" size={25} color={"white"}/>
                <Text style={styles.texteDe}>25°</Text>
                 
                 {/*il manque la barre de progression */}

                <Text style={styles.texteDe}>30°</Text>
               </View>
             </ScrollView>

        </BlurView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        height:450,
        width:350,
        flexDirection:"column",
        borderRadius:20,
        overflow:"hidden",
        paddingHorizontal:15
    },

    ligneOne:{
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

    lignedeux:{
        flexDirection:"row",
        height:35,
        justifyContent:"space-between",
        borderBottomWidth:0.7,
        borderBottomColor:"#A9A9A9",
        marginBottom:5
    },

    texteDe:{
        fontSize:18,
        color:"white",
        fontWeight:"600"
    }
})