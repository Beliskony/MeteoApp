import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View,ScrollView, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function Corpus(){
    return(
        <BlurView intensity={70} style={styles.container}>
              
              <View style={styles.first}>
                <Text style={styles.petitMot}>Temps nuageux entre 01:00 et 03:00, et de belles eclaircies prevues vers 03:00</Text>
              </View>
              
              <ScrollView horizontal>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>Maint.</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>01 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>23°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>02 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>23°</Text>
                 </View>


                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>03 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>23°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>04 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>23°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>05 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>06 h</Text>
                    <Ionicons name="sunny-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>25°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>07 h</Text>
                    <Ionicons name="sunny-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>23°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>08 h</Text>
                    <Ionicons name="sunny-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>25°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>09 h</Text>
                    <Ionicons name="rainy-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>27°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>10 h</Text>
                    <Ionicons name="rainy-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>28°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>11 h</Text>
                    <Ionicons name="cloudy-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>12 h</Text>
                    <Ionicons name="cloudy-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>13 h</Text>
                    <Ionicons name="thunderstorm-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>14 h</Text>
                    <Ionicons name="thunderstorm-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>21°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>15 h</Text>
                    <Ionicons name="thunderstorm-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>24°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>16 h</Text>
                    <Ionicons name="thunderstorm-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>17 h</Text>
                    <Ionicons name="thunderstorm-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>18 h</Text>
                    <Ionicons name="cloudy-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>20°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>19 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>22°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>20 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>24°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>21 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>26°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>22 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>25°</Text>
                 </View>

                 <View style={styles.slideMeteo}>
                    <Text style={styles.petit}>23 h</Text>
                    <Ionicons name="cloudy-night-outline" color={"white"} size={30} 
                    style={{paddingVertical:5, alignSelf:"center",alignContent:"center"}} />
                    <Text style={styles.petit}>25°</Text>
                 </View>

              </ScrollView>

        </BlurView>
    )
}

const styles = StyleSheet.create({
    container:{
       height:180,
       width:350,
       borderRadius:20,
       overflow:"hidden"
    },

    first:{
        margin:10,
        padding:5,
        borderBottomWidth:0.8,
        borderColor:"white"
    },

    petitMot:{
        color:"white",
        fontWeight:"400",
        fontSize:12,
        alignSelf:"center",
    },

    slideMeteo:{
      flexDirection:"column",
      alignContent:"center",
      marginHorizontal:10,
      padding:10,
      overflow:"hidden"
    },

    petit:{
        color:"white",
        fontWeight:"400",
        fontSize:16,
        alignSelf:"center",
        alignContent:"center"
    },

})